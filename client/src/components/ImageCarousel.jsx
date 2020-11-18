import React from 'react';
import styled from 'styled-components';

var ImageCarousel = (props) => {
  return (
    <ImageCarouselContainer>
      <Div><button onClick = {props.onClickClose}>X Close</button></Div>
      <Div><span>1/33</span></Div>
      <Div><button>Share</button><button>Fav</button></Div>
      <Div><button>Go Left</button></Div>
      <ImgDiv>
        {props.images.slice(0, 1).map((image, index) =>
          <Img src = {image.url} key = {index}/>
        )}
      </ImgDiv>
      <Div><button>Go Right</button></Div>
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

var Img = styled.img`
  object-fit: cover;
  max-height: 80%;
  max-width: 100%;
`;

var ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

var Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ImageCarousel;