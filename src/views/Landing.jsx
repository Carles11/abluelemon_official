import React, { Fragment, useState, useEffect } from 'react';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';
import url from '../assets/image/background.jpg';
import Title from '../components/Title';
import Background from '../components/Background';

const AboutSection = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'about-section' */ '../components/About-section'),
  loading: Loader,
});

const Footer = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'footer' */ '../components/Footer'),
  loading: Loader,
});

const Landing = () => {
  const [lazy, setLazy] = useState(false);

  useEffect(() => {
    if (!lazy) {
      AboutSection.preload();
      Footer.preload()
      setLazy(true);
    }
  });

  return (
    <Fragment>
      <Title />
      <Background url={url} />
      {!!lazy && <AboutSection />}
      {!!lazy && <Footer order={2} />}
    </Fragment>
  );
};

export default Landing;
