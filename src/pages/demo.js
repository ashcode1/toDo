import React from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const demo = () => {
// Use Title and Wrapper like any other React component – except they're styled!
    return (
      <Wrapper>
        <Title>
          To Do App!
        </Title>
      </Wrapper>
    )
}

export default demo;