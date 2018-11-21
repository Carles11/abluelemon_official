import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Box from './Box';
import { useWindowSize } from './Hooks';
import img1 from '../assets/image/about_carles.jpg';
import img2 from '../assets/image/about_xavi.jpg';
import img3 from '../assets/image/about_hassan.jpg';

const data = [
  {
    _id: 1,
    name: 'Carles Del Río',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img: img1,
    email: 'carles@gmail.com',
    role: 'CTO & FOUNDER',
  },

  {
    _id: 2,
    name: 'Xavi Del Río',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img: img2,
    email: 'carles@gmail.com',
    role: 'CEO & FOUNDER',
  },
  {
    _id: 3,
    name: 'Hassan Mokdad',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img: img3,
    email: 'carles@gmail.com',
    role: 'CTO & FOUNDER',
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
  padding: 10% 10% 1rem;
  box-sizing: border-box;
  background: #262938;
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
  margin: 3rem 0 0;
  padding: 8rem 0 0;
  border-top: 2px dotted #30354c;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutSection = () => {
  const { h: height } = useWindowSize();

  return (
    <Container id='aboutSection' position={height}>
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
            role={a.role}
          />
        ))}
      </Boxes>
    </Container>
  );
};

export default AboutSection;
