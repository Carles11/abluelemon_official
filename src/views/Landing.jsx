import React from 'react';

import DynamicImport from '../DynamicImport';
import Loader from '../components/Loader';
import url from '../assets/image/intro.jpg';

/**
 * Lazy load Background component
 * @param {object} props
 * @returns Component
 */
const getBackground = props => (
  <DynamicImport load={() => import('../components/Background')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);

const Landing = () => {
  const Background = getBackground({ url });

  return <section>{Background}</section>;
};

export default Landing;
