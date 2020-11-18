import React from 'react';
import styled from 'styled-components';

var FavoriteCategory = (props) => {
  return (
    <FavoriteCategoryContainer>
      <h3>Save to a list</h3>
      <div><button>Create a new list</button></div>
      <div><button onClick = {props.onClickDone}>Done</button></div>
    </FavoriteCategoryContainer>
  );
};

var FavoriteCategoryContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export default FavoriteCategory;
