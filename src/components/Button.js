import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      Submit
    </StyledButton>
  )
}

const StyledButton = styled.button`
  height: 50px;
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export { Button };
