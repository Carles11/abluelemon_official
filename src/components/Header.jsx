import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import logo from '../assets/image/logo.png';

const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 73px;
  z-index: 1000;
`;

const logoLink = css`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1002;
`;

const LogoLink = styled(Link)`
  ${logoLink}
`;

const Logo = styled.img`
  margin-left: 2rem;
  width: 90px;
  height: auto;
  transition: width 0.3s, margin 0.3s;

  &:hover {
    width: 80px;
    margin-left: 2.3rem;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #262938;
  width: 100%;
  height: 73px;
  z-index: 999;
  opacity: 0.6;
`;

const Header = () => {
  return (
    <Container>
      <LogoLink to='/'>
        <Logo src={logo} alt='Abluelemon logo' />
      </LogoLink>
      <Navigation />
      <Background />
    </Container>
  );
};

export default Header;
