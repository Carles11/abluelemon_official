import React from 'react';
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: top 0.5s ease-out, left 0.5s ease-in-out, width 0.5s ease-in-out;

  ${props =>
    props.animate &&
    css`
      top: ${props => 2 * -props.position + 'px'};
      left: -5%;
      width: 110%;
      filter: blur(${props => props.position / 15 + 'px'});
    `}
`;

const Background = props => {
  const scroll = useScrollPosition();
  const position = Math.floor(scroll / 10);

  return (
    <Figure>
      <Image
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
