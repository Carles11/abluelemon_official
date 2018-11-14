import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../assets/image/logo.png';

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const AnimateLoader = keyframes`
  0% { width: 40px;}
  50% { width: 70px;}
  100% { width: 40px; }
`;

const LoaderImg = styled.img`
  animation: ${AnimateLoader} 0.6s infinite ease-in-out;
`;

const Loader = props => (
  <LoaderWrapper>
    <LoaderImg src={logo} alt='Loader icon' role='loader' />
  </LoaderWrapper>
);

export default Loader;
