import React from 'react';
import styled from 'styled-components';

var ImageCarousel = (props) => {
  return (
    <ImageCarouselContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <ImgDiv>
        {props.images.slice(0, 1).map((image, index) =>
          <Img src = {image.url} key = {index}/>
        )}
      </ImgDiv>
      <div></div>
    </ImageCarouselContainer>
  );
};

var ImageCarouselContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  background-color: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-gap: 10px;
`;

var Img = styled.img`
  object-fit: cover;
  max-height: 80%;
  max-width: 100%;
`;

var ImgDiv = styled.div`
  text-align: center;
  overflow: hidden;
`;

export default ImageCarousel;