import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Box from './Box';
import { useWindowSize, useScrollPosition } from './Hooks';
import img1 from '../assets/image/about_carles.jpg';
import img2 from '../assets/image/about_xavi.jpg';
import img3 from '../assets/image/about_hassan.jpg';

// @todo API REQUEST
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
  padding: 3% 10% 1rem;
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

const Title = styled.h3`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  text-align: center;
  opacity: 0;
  transition: opacity 800ms cubic-bezier(0.19, 1, 0.22, 1),
    margin-top 800ms cubic-bezier(0.19, 1, 0.22, 1);

  ${props =>
    props.render &&
    css`
      opacity: 1;
      margin-top: 0;
    `}

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  color: #15b6cd;
  margin: 4.5rem 0 1rem;
  opacity: 0;
  transition: opacity 800ms cubic-bezier(0.19, 1, 0.22, 1),
    margin-top 800ms cubic-bezier(0.19, 1, 0.22, 1);

  ${props =>
    props.render &&
    css`
      opacity: 1;
      margin-top: 3rem;
    `}
`;

const Boxes = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 5rem;
  padding: 10rem 0 0;
  border-top: 2px dotted #30354c;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const AboutSection = () => {
  const [render, setRender] = useState(false);
  const { h: height } = useWindowSize();
  const scroll = useScrollPosition();

  useEffect(() => {
    if (!render && scroll > height / 4) {
      setRender(true);
    }

    if (render && scroll < height / 4) {
      setRender(false);
    }
  });

  return (
    <Container position={height}>
      <SectionTitle render={render}>About us</SectionTitle>
      <Title render={render}>
        We achieve a positive economic and social impact of our events generated
        for the surrounding areas, while also providing visibility for the
        surrounding businesses.
      </Title>

      <Boxes>
        {data.map((a, i) => (
          <Box
            order={i + 1}
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
