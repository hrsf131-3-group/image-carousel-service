import React from 'react';
import styled from 'styled-components';

var ShareLike = (props) => {
  return (
    <Div>
      <Button>
        <Share xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"/><path d="M16 3v23V3z"/><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"/></g></Share><span>Share</span>
      </Button>
      <Button onClick = {props.onClickFav}>
        <Heart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/></Heart><span>Saved</span>
      </Button>
    </Div>
  );
};

var Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20%;
`;

var Button = styled.button`
  border: none;
  background: none;
  outline:none;
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

export default ShareLike;
