import React from 'react';
import styled from 'styled-components';

import { useWindowSize } from './Hooks'

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.position + 'px'};
  min-height: ${props => props.position + 'px'};
  padding: 3% 10% 1rem;
  box-sizing: border-box;
  background: #262938;
  z-index: 1;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 5%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const ProjectBody = props => {
  const { h: height } = useWindowSize();

  return(
    <Container position={height}>
      <h1>project body</h1>
    </Container>
  )
}

export default ProjectBody
