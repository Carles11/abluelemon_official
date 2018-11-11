import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Figure = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: 50% 50%;
  background-size: cover; 
  background-repeat: no-repeat:
`;

const Background = props => (
  <Figure>
    <Image style={{ backgroundImage: `url(${props.url})` }} />
  </Figure>
);

Background.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Background;
