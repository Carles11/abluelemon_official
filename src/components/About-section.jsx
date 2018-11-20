import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Box from './Box';
import { useWindowSize, useScrollPosition } from './Hooks';
import img from '../assets/image/xavi.jpg';

const data = [
  {
    _id: 1,
    name: 'Carles Del Río',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img,
    email: 'carles@gmail.com',
  },

  {
    _id: 2,
    name: 'Xavi Del Río',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img,
    email: 'carles@gmail.com',
  },
  {
    _id: 3,
    name: 'Hassan',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img,
    email: 'carles@gmail.com',
  },
];

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.position + 'px'};
  min-height: ${props => props.position + 'px'};
  padding: 5% 10% 1rem;
  box-sizing: border-box;
  background: #262938;
  transition: top 0.5s ease-out;
  z-index: 1;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 5%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #15b6cd;
  margin: 3rem 0 1rem;
`;

const Boxes = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 0;
  padding: 5rem 0 0;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutSection = () => {
  const size = useWindowSize();

  return (
    <Container id='aboutSection' position={size.h}>
      <SectionTitle>About us</SectionTitle>
      <Text>
        <Title>
          We achieve a positive economic and social impact of our events
          generated for the surrounding areas, while also providing visibility
          for the surrounding businesses.
        </Title>
      </Text>

      <Boxes>
        {data.map(a => (
          <Box
            key={a._id}
            img={a.img}
            name={a.name}
            description={a.description}
            mail={a.email}
          />
        ))}
      </Boxes>
    </Container>
  );
};

export default AboutSection;
