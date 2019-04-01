import React from 'react';
import styled from 'styled-components';

const InputLabel = (props) => {
  const { name } = props;
  return (
    <StyledLabel>{name}</StyledLabel>
  )
}

const StyledLabel = styled.text`

`;

export { InputLabel };