import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';

const ProjectList = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'project-list' */ '../components/Project-list'),
  loading: Loader,
});

const Footer = Loadable({
  loader: () => import(/* webpackChunkName: 'footer' */ '../components/Footer'),
  loading: Loader,
});

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const [lazy, setLazy] = useState(false);

  useEffect(
    () => {
      Footer.preload();
      ProjectList.preload();
      setLazy(true);
    },
    [lazy],
  );

  return (
    <Container>
      <Helmet
        title='Projects'
        meta={[{ name: 'description', content: 'Projects' }]}
      />
      {!!lazy && <ProjectList />}
      {!!lazy && <Footer />}
    </Container>
  );
};

export default Projects;
