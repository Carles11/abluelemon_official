import React from 'react';
import styled, { css } from 'styled-components';

import { useWindowSize, useScrollPosition } from './Hooks';

const Container = styled.section`
  width: 100%;
  position: absolute;
  top: ${props => props.position + 'px'};
  min-height: ${props => props.position + 'px'};
  padding: 1rem;
  box-sizing: border-box;
  background: white;
  transition: top 0.5s ease-out;
  z-index: 1;
  
`;

const AboutSection = () => {
  const size = useWindowSize();
  const scroll = useScrollPosition();
  const animate = scroll > 0 ? true : false;
  
  return (
    <Container position={size.h} animate={animate}>
      <h2>About us</h2>
    </Container>
  );
};

export default AboutSection;
