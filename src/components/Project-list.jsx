import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ProjectItem from './Project-item';
import { useWindowSize } from './Hooks';
import Loader from './Loader';
import config from '../config';

const { API_URL, fetch_options } = config;

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  min-height: ${props => props.position + 'px'};
  padding: 3% 10% 1rem;
  box-sizing: border-box;
  background: #262938;
  z-index: 1;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 5%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const ProjectList = props => {
  const [data, setData] = useState([]);
  const { h: height } = useWindowSize();

  function fetchData() {
    fetch(`${API_URL}projects`, fetch_options.get)
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
    if (data && !data.lenght) {
      fetchData();
    }
  }, []);

  if (data.lenght === 0) return <Loader msg={'Loading projects.'} />;

  return (
    <Container position={height}>
      {data
        .sort((a, b) => (a.year > b.year ? -1 : 1))
        .map((d, i) => (
          <ProjectItem key={d._id} order={i + 1} {...d} />
        ))}
    </Container>
  );
};

export default ProjectList;
