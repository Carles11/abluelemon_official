import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.article`
  width: 100%;
  position: relative;
  background: #2a2e3e;
  padding: 6rem 1rem 1rem;
  margin-bottom: 8rem;
  box-sizing: border-box;

  &:nth-child(2) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    &:nth-child(2) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  }

  @media only screen and (max-width: 768px) {
    &:nth-child(2) {
      margin-left: 0;
      margin-right: 0;
    }

    &:last-child {
      margin-bottom: 2rem;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 160px;
  margin: 0 auto;
  display: block;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 0;
`;

const Subtitle = styled.h4`
  color: #15b6cd;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px dotted #15b6cd;
`;

const Text = styled.p`
  line-height: 1.5;
`;

const Box = props => {
  const { name, description, img, mail } = props;

  return (
    <Container>
      <Image src={img} alt={name} />
      <Title>{name}</Title>
      <Subtitle>CTO & FOUNDER</Subtitle>
      <Text>{description}</Text>
      <a href={`mailto:${mail}`}>{mail}</a>
    </Container>
  );
};

export default Box;
