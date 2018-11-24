import React from 'react';
import Helmet from 'react-helmet';
import 'lazysizes';

import Header from './components/Header';
import Routes from './Routes';
import SmoothScroll from './utils/smoothScroll';

const App = () => {
  SmoothScroll(document, 90, 16);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default App;
