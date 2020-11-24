import React from 'react';
import styled from 'styled-components';


var Title = (props) => {
  return (
    <div>
      <TitleHeading>
        {props.title}
      </TitleHeading>
    </div>
  );
};

var TitleHeading = styled.h2`
  margin: 10px 0 0 20%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-weight: 500;
`;

export default Title;