import React from 'react';
import styled from 'styled-components';

var FavoriteCategory = (props) => {
  return (
    <FavoriteCategoryContainer>
      <ModalContainer>
        <h3>Save to a list</h3>
        <div><button>Create a new list</button></div>
        <div><button onClick = {props.onClickDone}>Done</button></div>
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
  top: 30%;
  left: 35%;
  z-index: 3;
  background-color: white;
  width: 570px;
  height: 360px;
  text-align: center;
  border-radius: 15px;
`;

export default FavoriteCategory;