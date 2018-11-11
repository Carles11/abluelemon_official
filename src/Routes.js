// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DynamicImport from './DynamicImport';
import Loader from './components/Loader.jsx';

const Landing = props => (
  <DynamicImport load={() => import('./views/Landing')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);
const About = props => (
  <DynamicImport load={() => import('./views/About')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);

const Projects = props => (
  <DynamicImport load={() => import('./views/Projects')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/about-me' component={About} />
    <Route path='/projects' component={Projects} />
  </Switch>
);

export default Routes;
