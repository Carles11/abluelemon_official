import React from 'react';
import styled from 'styled-components';

import { useWindowSize } from './Hooks';

const Container = styled.footer`
  width: 100%;
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
  background: #2a2e3e;
  transition: top 0.5s ease-out;
  z-index: 1;
  border-top: 1px dotted #1b1c23;
`;

const Footer = props => {
  const { h } = useWindowSize();
  let position = Number(props.order) * h;

  return <Container position={position}>&copy; A blue lemon</Container>;
};

export default Footer;
