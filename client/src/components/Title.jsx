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
  margin-left: 20%;;
`;

export default Title;