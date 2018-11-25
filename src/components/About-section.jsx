import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Loader from './Loader';
import Box from './Box';
import { useWindowSize, useScrollPosition } from './Hooks';
import config from '../config';

const { API_URL, fetch_options } = config;

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

const Title = styled.h2`
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

const Text = styled.h3`
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
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);
  const { h: height } = useWindowSize();
  const scroll = useScrollPosition();

  function fetchData() {
    fetch(`${API_URL}users`, fetch_options.get)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setData(res.data);
        } else {
          setData([]);
        }
      })
      .catch(err => setData([]));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(
    () => {
      if (scroll > height / 4) {
        setRender(true);
      }

      if (scroll < height / 4) {
        setRender(false);
      }
    },
    [scroll],
  );

  if (data && !data.length) return <Loader />;

  return (
    <Container position={height}>
      <Title render={render}>About us</Title>

      <Text render={render}>
        We achieve a positive economic and social impact of our events generated
        for the surrounding areas, while also providing visibility for the
        surrounding businesses.
      </Text>

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
