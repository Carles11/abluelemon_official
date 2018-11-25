import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';
import url from '../assets/image/background.jpg';
import Background from '../components/Background';
import { useWindowSize } from '../components/Hooks';

const AboutSection = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'about-section' */ '../components/About-section'),
  loading: Loader,
});

const Footer = Loadable({
  loader: () => import(/* webpackChunkName: 'footer' */ '../components/Footer'),
  loading: Loader,
});

const LazyWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.size + 'px'};
  min-height: ${props => props.size + 'px'};
`;

const Landing = () => {
  const [lazy, setLazy] = useState(false);
  const { h: height } = useWindowSize();

  useEffect(
    () => {
      AboutSection.preload();
      Footer.preload();
      setLazy(true);
    },
    [lazy],
  );

  return (
    <Fragment>
      <Background url={url} />
      <LazyWrapper size={height}>{!!lazy && <AboutSection />}</LazyWrapper>
      {!!lazy && <Footer />}
    </Fragment>
  );
};

export default Landing;
