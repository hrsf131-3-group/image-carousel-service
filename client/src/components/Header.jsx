import React from 'react';
import styled from 'styled-components';

var Header = (props) => {
  return (
    <div>
      <HeaderImg src = 'https://static-images-fec.s3-us-west-1.amazonaws.com/header.png'/>
    </div>
  );
};

var HeaderImg = styled.img`
  width: 100%;
`;

export default Header;
