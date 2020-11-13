/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE IF NOT EXISTS image_carousel;

USE image_carousel;

CREATE TABLE listings(
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE photos(
  id INT NOT NULL PRIMARY KEY,
  url VARCHAR(100),
  description VARCHAR(300),
  listing_id INT,
  FOREIGN KEY(listing_id) REFERENCES listings(id) ON DELETE CASCADE
);

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50)
);

CREATE TABLE fav_categories(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE fav_listings(
  listing_id INT,
  fav_category_id INT,
  FOREIGN KEY(listing_id) REFERENCES listings(id) ON DELETE CASCADE,
  FOREIGN KEY(fav_category_id) REFERENCES fav_categories(id) ON DELETE CASCADE
);

