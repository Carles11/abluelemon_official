import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import logo from '../assets/image/logo.png';

const Container = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 1000;
`;

const Figure = styled.figure`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  z-index: 1001;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #262938;
  width: 100%;
  height: 75px;
  z-index: 999;
  opacity: 0.6;
`;

const Header = () => {
  return (
    <Container>
      <Figure>
        <img src={logo} alt='Abluelemon logo' />
      </Figure>
      <Navigation />
      <Background />
    </Container>
  );
};

export default Header;
