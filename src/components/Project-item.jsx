import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getSlug } from '../utils/helpers';

const Container = styled.article.attrs({
  style: props => ({
    transitionDelay: 200 * props.order + 'ms',
  }),
})`
  width: 33%;
  position: relative;
  background: #2a2e3e;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 500ms ease-in-out, margin-top 500ms ease-in-out;

  &:nth-child(2) {
    margin-left: 0.5%;
    margin-right: 0.5%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1224px) {
    width: 49%;
    margin-bottom: 8rem;

    &:nth-child(2) {
      margin-right: 0;
      margin-left: 2%;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 8rem;

    &:nth-child(2) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  ${props =>
    props.render &&
    css`
      opacity: 1;
      margin-top: 0;
    `}
`;

const figure = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  margin: 0;
  overflow: hidden;
`;

const Figure = styled(Link)`
  ${figure}
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 150%;
`;

const Title = styled.h2`
  position: relative;
  margin-top: 300px;
`;

const ProjectItem = props => {
  const [render, setRender] = useState(false);
  const { order, title, images, _id } = props;
  const slug = getSlug(`${title} ${_id}`);

  useEffect(
    () => {
      setRender(true);
    },
    [render],
  );

  return (
    <Container render={render} order={order}>
      <Figure to={`/projects/${slug}`}>
        <Image className='lazyload' data-src={images[0]} alt={title} />
      </Figure>
      <Title>{title}</Title>
    </Container>
  );
};

ProjectItem.propTypes = {
  order: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default ProjectItem;
