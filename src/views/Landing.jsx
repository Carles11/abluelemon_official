import React from 'react';
import withScreenSize from '../components/HOC/withScreenSize';

import DynamicImport from '../DynamicImport';
import Loader from '../components/Loader';
import url from '../assets/imgs/iStock-903663312.jpg';

const Background = props => (
  <DynamicImport load={() => import('../components/Background')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);

const Landing = () => {
  return <section>{Background({ url })}</section>;
};

const LandingWithScreenSize = withScreenSize(Landing);

export default LandingWithScreenSize;
