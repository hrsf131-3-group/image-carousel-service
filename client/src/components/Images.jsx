import React from 'react';
import styled from 'styled-components';

var Images = (props) => {
  return (
    <ImageGrid>
      <Img1 src = {props.images[0].url} onClick = {() => props.onClickShowImage(0)}/>
      <Img2 src = {props.images[1].url} onClick = {() => props.onClickShowImage(1)}/>
      <Img3 src = {props.images[2].url} onClick = {() => props.onClickShowImage(2)}/>
      <Img4 src = {props.images[3].url} onClick = {() => props.onClickShowImage(3)}/>
      <Img5 src = {props.images[4].url} onClick = {() => props.onClickShowImage(4)}/>
      <Button onClick = {() => props.onClickShowImage(0)}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" role="presentation" aria-hidden="true" focusable="false"><circle cx="1.5" cy="1.5" r="1.5"/><circle cx="1.5" cy="8.5" r="1.5"/><circle cx="8.5" cy="1.5" r="1.5"/><circle cx="8.5" cy="8.5" r="1.5"/><circle cx="15.5" cy="1.5" r="1.5"/><circle cx="15.5" cy="8.5" r="1.5"/><circle cx="1.5" cy="15.5" r="1.5"/><circle cx="8.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/></Svg>Show all photos</Button>
    </ImageGrid>
  );
};

var ImageGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;
  width: 60%;
  margin: 15px auto;
  height: 520px;
  overflow: hidden;
  border-radius: 12px;
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

var Button = styled.button`
  & {
    position: absolute;
    right: 25px;
    bottom: 25px;
    background-color: white;
    color: rgb(34, 34, 34);
    font-size: 14px;
    padding: 7px 15px;
    border: 1px solid rgb(34, 34, 34);
    cursor: pointer;
    border-radius: 8px;
    font-weight: 500;
    outline:none;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  }

  &:hover {
    border-color: rgb(0, 0, 0);
    background: rgb(247, 247, 247);
    color: rgb(34, 34, 34);
  }
`;

var Svg = styled.svg`
  height: 12px;
  width: 12px;
  fill: currentcolor;
  padding-right: 9px;
`;

export default Images;