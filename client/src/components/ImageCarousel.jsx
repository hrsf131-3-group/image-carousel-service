import React from 'react';
import styled, { keyframes } from 'styled-components';

var ImageCarousel = (props) => {
  return (
    <ImageCarouselContainer>
      <Div>
        <CloseButton onClick = {props.onClickClose}>X Close</CloseButton>
      </Div>
      <Div>
        <Span>{props.currentIndex + 1} / {props.images.length}</Span>
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
        {props.currentIndex !== 0 ? <NavArrowButton onClick = {props.goLeft}><NavArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"/></NavArrow></NavArrowButton> : null}
      </Div>
      <ImgDiv>
        <Img src = {props.images[props.currentIndex].url}/>
        <span>{props.images[props.currentIndex].description}</span>
      </ImgDiv>
      <Div>
        {props.currentIndex !== props.images.length - 1 ? <NavArrowButton onClick = {props.goRight}><NavArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"/></NavArrow></NavArrowButton> : null}
      </Div>
    </ImageCarouselContainer>
  );
};

var Appear = keyframes`
  0% { top: 100%; opacity: 0; }
  100% { top: 0; opacity: 1;}
`;

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
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  animation-fill-mode: forwards;
  animation: ${Appear} 0.5s;
`;

var ImgDiv = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
`;

var Img = styled.img`
  object-fit: cover;
  max-height: 80%;
  max-width: 100%;
  margin-bottom: 30px;
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
  outline:none;
`;

var CloseButton = styled(Button)`
& {
  border-radius: 8px;
  background-color: rgba(34, 34, 34, 0.1);
  padding: 8px 16px;
  font-weight: 500;
}
&:hover {
  cursor: pointer;
  background-color: rgba(34, 34, 34, 0.16);
}
`;

var NavArrow = styled.svg`
  height: 12px;
  width: 12px;
  display: block;
  fill: currentcolor;
`;

var NavArrowButton = styled(Button)`
& {
  border-radius: 50%;
  padding: 16px 16px;
  border: 1px solid rgb(176, 176, 176)
}
&:hover {
  cursor: pointer;
  background-color: rgba(34, 34, 34, 0.04);
}
`;

var Span = styled.span`
  font-weight: 300;
`;

export default ImageCarousel;

