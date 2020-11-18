import React from 'react';
import styled from 'styled-components';

var Images = (props) => {
  return (
    <ImageGrid>
      <Img1 src = {props.images[0].url} onClick = {props.onClickImage}/>
      <Img2 src = {props.images[1].url} onClick = {props.onClickImage}/>
      <Img3 src = {props.images[2].url} onClick = {props.onClickImage}/>
      <Img4 src = {props.images[3].url} onClick = {props.onClickImage}/>
      <Img5 src = {props.images[4].url} onClick = {props.onClickImage}/>
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