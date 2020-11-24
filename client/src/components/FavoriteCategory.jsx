import React from 'react';
import styled from 'styled-components';

var FavoriteCategory = (props) => {
  return (
    <FavoriteCategoryContainer>
      <FavoriteCategoryBackground showFavCategory = {props.showFavCategory} />
      <ModalContainer showFavCategory = {props.showFavCategory}>
        <HeaderDiv>
          <CloseButton onClick = {props.onClickDone}>
            <CrossSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"/><path d="m26 6-20 20"/></CrossSvg>
          </CloseButton>
          <Span>Save to a list</Span>
        </HeaderDiv>
        <ContentDiv>
          <ListItemDiv>
            <NewListButton>
              <PlusSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="M28,17H17V28H15V17H4V15H15V4h2V15H28Z"/></PlusSvg>
            </NewListButton>
            <span>Create a new list</span>
          </ListItemDiv>
          {props.favCategories.map((favCategory, index) =>
            <ListItemDiv key = {index}>
              <Img src = {props.image.url}/>
              <span>{favCategory.name}</span>
              <Heart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/></Heart>
            </ListItemDiv>
          )}
        </ContentDiv>
        <DoneDiv>
          <DoneButton onClick = {props.onClickDone}>Done</DoneButton>
        </DoneDiv>
      </ModalContainer>
    </FavoriteCategoryContainer>
  );
};

var FavoriteCategoryContainer = styled.div`
  // z-index: ${props => props.showFavCategory ? '2' : '-1'};
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  overflow: hidden;
`;

var FavoriteCategoryBackground = styled.div`
  position: absolute;
  display: ${props => props.showFavCategory ? 'block' : 'none'};
  z-index: ${props => props.showFavCategory ? '1' : '-1'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  overflow: hidden;
  transition: z-index 0.6s;
`;

var ModalContainer = styled.div`
  position: absolute;
  z-index: ${props => props.showFavCategory ? '10' : '-1'};
  top: ${props => props.showFavCategory ? 'calc(50% - 360px/2)' : 'calc(100% - 360px)'};
  opacity: ${props => props.showFavCategory ? '1' : '0'};
  left: calc(50% - 570px/2);
  background-color: white;
  width: 570px;
  max-height: 900px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr 80px;
  transition: top 0.6s, opacity 0.5s, z-index 0.6s;
`;

var HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

var CloseButton = styled.button`
  & {
    border: none;
    background: none;
    outline: none;
    margin-left: 15px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.04);
  }
`;

var Span = styled.span`
  margin-left: 193px;
  font-weight: 600;
`;

var DoneDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgb(235, 235, 235);
`;

var DoneButton = styled.button`
  & {
    border: none;
    background-color: rgba(0, 0, 0, 0.85);
    padding: 14px 24px;
    border-radius: 8px;
    outline: none;
    color: white;
    margin-right: 20px;
    font-size: medium;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 1);
  }
`;

var NewListButton = styled(DoneButton)`
  border-radius: 4px;
  padding: 16px;
`;

var ContentDiv = styled.div`
  margin: 18px;
`;

var ListItemDiv = styled.div`
& {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
}
&:hover {
  cursor: pointer;
  background-color: rgb(247, 247, 247);
}
`;

var CrossSvg = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

var PlusSvg = styled.svg`
  display: block;
  height: 32px;
  width: 32px;
  fill: rgb(255, 255, 255);
`;

var Img = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
`;

var Heart = styled.svg`
  fill: rgb(255, 56, 92);
  height: 24px;
  width: 24px;
  stroke: rgb(255, 56, 92);
  stroke-width: 2;
  overflow: visible;
  margin-left: 320px;
`;

export default FavoriteCategory;