import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import 'lazysizes';

import Header from './components/Header';
import Routes from './Routes';

const App = () => {
  return (
    <Fragment>
      <Helmet
        titleTemplate={`%s | A BLUE LEMON`}
        defaultTitle='A BLUE LEMON PRODUCTIONS'>
        <link rel='canonical' href='https://abluelemon.com' />
        <meta
          name='description'
          content='A Blue Lemon productions, Musical productions'
        />
      </Helmet>
      <Header />
      <Routes />
    </Fragment>
  );
};

export default App;
