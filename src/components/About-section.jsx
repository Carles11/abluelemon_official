import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Box from './Box';
import { useWindowSize, useScrollPosition } from './Hooks';
import img from '../assets/image/xavi.jpg';
import quotation from '../assets/image/quotation.png';

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
    name: 'Carles Del Río',
    description:
      'Carles brings an over 12 years professional experience in organizing and technical-production of events. Carles is Eventmanager (IHK Hamburg, Germany) and Dipl. Audio Engineer (SAE Frankfurt, Germany) and works today as such on live events and festivals in Germany and surrounding European countries. He takes care of all production logistics for the Company as Head of Production.',
    img,
    email: 'carles@gmail.com',
  },
  {
    _id: 3,
    name: 'Carles Del Río',
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
  padding: 5% 5% 1rem;
  box-sizing: border-box;
  background: #262938;
  transition: top 0.5s ease-out;
  z-index: 1;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
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

const Image = styled.div`
  background: url(${quotation}) no-repeat 40% 0 transparent;
  width: 39px;
  height: 29px;
  padding: 2.5rem 2rem 0.5rem;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const SectionTitle = styled.h2`
  color: #15b6cd;
  margin: 3rem 0 1rem;
`;

const Boxes = styled.div`
  position: relative;
  display: flex;
  margin: 3rem 0 0;
  padding: 10rem 0 0;
  border-top: 1px dotted #2a2e3e;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const AboutSection = () => {
  const size = useWindowSize();

  return (
    <Container id='aboutSection' position={size.h}>
      <SectionTitle>About us</SectionTitle>
      <Text>
        <Image />
        <Title className='title'>
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
