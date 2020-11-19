import React from 'react';
import styled from 'styled-components';

var ImageCarousel = (props) => {
  return (
    <ImageCarouselContainer>
      <Div>
        <CloseButton onClick = {props.onClickClose}>X Close</CloseButton>
      </Div>
      <Div>
        <span>{props.currentIndex + 1}/{props.images.length}</span>
      </Div>
      <Div>
        <Button>
          <Share xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"/><path d="M16 3v23V3z"/><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"/></g></Share>
        </Button>
        <Button onClick = {props.onClickFav}>
          <Heart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/></Heart>
        </Button>
      </Div>
      <Div>
        {props.currentIndex !== 0 ? <button onClick = {props.goLeft}>Go Left</button> : null}
      </Div>
      <ImgDiv>
        <Img src = {props.images[props.currentIndex].url}/>
      </ImgDiv>
      <Div>
        {props.currentIndex !== props.images.length - 1 ? <button onClick = {props.goRight}>Go Right</button> : null}
      </Div>
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
  transition: all 3s ease;
`;

var Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

var Share = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 2;
  overflow: visible;
`;

var Heart = styled.svg`
  display: block;
  fill: rgb(255, 56, 92);
  height: 16px;
  width: 16px;
  stroke: rgb(255, 56, 92);
  stroke-width: 2;
  overflow: visible;
`;

var Button = styled.button`
  border: none;
  background: none;
`;

var CloseButton = styled(Button)`
& {
  border-radius: 8px;
  background-color: rgba(34, 34, 34, 0.1);
  padding: 8px 16px;
  filter: brightness(100%);
}
&:hover {
  cursor: pointer;
  background-color: rgba(34, 34, 34, 0.16);
}
`;

export default ImageCarousel;

