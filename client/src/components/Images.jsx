import React from 'react';
import styled from 'styled-components';

var Images = (props) => {
  return (
    <ImageGrid>
      {/* {props.images.map((image, index) =>
        <img src = {image.url} key = {index}/>
      )} */}
      <Img1 className = 'image1' src = 'https://a0.muscache.com/im/pictures/670af320-c060-4225-ac73-1e8cde40752c.jpg?im_w=1200'/>
      <Img2 className = 'image2' src = 'https://a0.muscache.com/im/pictures/670af320-c060-4225-ac73-1e8cde40752c.jpg?im_w=1200'/>
      <Img3 className = 'image3' src = 'https://a0.muscache.com/im/pictures/670af320-c060-4225-ac73-1e8cde40752c.jpg?im_w=1200'/>
      <Img4 className = 'image4' src = 'https://a0.muscache.com/im/pictures/670af320-c060-4225-ac73-1e8cde40752c.jpg?im_w=1200'/>
      <Img5 className = 'image5' src = 'https://a0.muscache.com/im/pictures/670af320-c060-4225-ac73-1e8cde40752c.jpg?im_w=1200'/>
    </ImageGrid>
  );
};

var ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;
  width: 60%;
  margin: auto;
  height: 520px;
  overflow: hidden;
  border-radius: 25px;
`;

var Img1 = styled.img`
& {
  grid-area: 1 / 1 / 3 / 2;
  object-fit: cover;
  height: 100%;
  width: 100%;
  filter: brightness(100%);
}
&:hover {
  cursor: pointer;
  filter: brightness(85%);
  transition: all 0.3s ease;
}
`;

var Img2 = styled(Img1)`
  grid-area: 1 / 2 / 2 / 3;
`;

var Img3 = styled(Img1)`
  grid-area: 1 / 3 / 2 / 4;
`;

var Img4 = styled(Img1)`
  grid-area: 2 / 2 / 3 / 3;
`;

var Img5 = styled(Img1)`
  grid-area: 2 / 3 / 3 / 4;
`;

export default Images;