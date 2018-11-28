import React, { Fragment, useContext } from 'react';
import Helmet from 'react-helmet';
import 'lazysizes';

import Header from './components/Header';
import Routes from './Routes';
import SmoothScroll from './utils/smoothScroll';
import { LocalesContext } from './components/Context';

const App = () => {
  const LOCALES = useContext(LocalesContext);
  SmoothScroll(document, 90, 16);

  return (
    <Fragment>
      <Helmet
        titleTemplate={`%s | ${LOCALES.APP_NAME}`}
        defaultTitle={LOCALES.APP_NAME}>
        <link rel='canonical' href='https://abluelemon.com' />
        <meta name='description' content={LOCALES.APP_DESCRIPTION} />
      </Helmet>
      <Header />
      <Routes />
    </Fragment>
  );
};

export default App;
