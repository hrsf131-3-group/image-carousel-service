import React from 'react';
import styled from 'styled-components';

var ImageCarousel = (props) => {
  return (
    <ImageCarouselContainer>
      <Div><button onClick = {props.onClickClose}>X Close</button></Div>
      <Div><span>{props.currentIndex + 1}/{props.images.length}</span></Div>
      <Div><button>Share</button><button onClick = {props.onClickFav}>Fav</button></Div>
      <Div><button onClick = {props.goLeft}>Go Left</button></Div>
      <ImgDiv>
        <Img src = {props.images[props.currentIndex].url}/>
      </ImgDiv>
      <Div><button onClick = {props.goRight}>Go Right</button></Div>
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
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 8fr;
`;

var ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

var Img = styled.img`
  object-fit: cover;
  max-height: 80%;
  max-width: 100%;
`;

var Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ImageCarousel;