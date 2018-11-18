import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { useScrollPosition } from './Hooks';

const Figure = styled.figure`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const Image = styled.div`
  position: absolute;
  width: 103%;
  height: 100%;
  top: 0;
  left: -1.5%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, top 0.5s ease-out, left 1s ease-in-out,
    width 1s ease-in-out;

  ${props =>
    props.render &&
    css`
      opacity: 1;
    `}

  ${props =>
    props.animate &&
    css`
      top: ${props => 2 * -props.position + 'px'};
      filter: blur(${props => props.position / 12 + 'px'});
    `}
`;

const Background = props => {
  const [render, setRender] = useState(false);
  const scroll = useScrollPosition();
  const position = Math.floor(scroll / 10);

  useEffect(() => {
    if (!render) {
      setRender(true);
    }
  });

  return (
    <Figure>
      <Image
        render={render}
        animate={scroll}
        position={position}
        style={{ backgroundImage: `url(${props.url})` }}
      />
    </Figure>
  );
};

Background.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Background;
