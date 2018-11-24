import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

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

const Message = styled.p`
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Loader = props => {
  const { msg } = props;

  return (
    <LoaderWrapper>
      <LoaderImg src={logo} alt='Loader icon' role='loader' />
      {!!msg && <Message>{msg}</Message>}
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  msg: PropTypes.string,
};

export default Loader;
