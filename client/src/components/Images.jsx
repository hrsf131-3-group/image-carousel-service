import React from 'react';

var Images = (props) => {
  return (
    <div>
      {props.images.map((image, index) =>
        <img src = {image.url} key = {index}/>
      )}
    </div>
  );
};

export default Images;