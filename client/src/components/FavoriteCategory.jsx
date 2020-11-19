import React from 'react';
import styled from 'styled-components';

var FavoriteCategory = (props) => {
  return (
    <FavoriteCategoryContainer>
      <ModalContainer>
        <Div><CloseButton onClick = {props.onClickDone}>x</CloseButton><Span>Save to a list</Span></Div>
        <div><button>Create a new list</button></div>
        <Div><Done onClick = {props.onClickDone}>Done</Done></Div>
      </ModalContainer>
    </FavoriteCategoryContainer>
  );
};

var FavoriteCategoryContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
`;

var ModalContainer = styled.div`
  position: absolute;
  top: calc(50% - 360px/2);
  left: calc(50% - 570px/2);
  background-color: white;
  width: 570px;
  max-height: 900px;
  text-align: center;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr 80px;
`;

var Div = styled.div`
 display: flex;
`;

var CloseButton = styled.button`
  justify-content: flex-start;
`;

var Span = styled.span`
  justify-self: center;
`;

var Done = styled.button`
  justify-self: flex-end;
`;

export default FavoriteCategory;