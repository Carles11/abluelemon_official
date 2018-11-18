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

const Projects = props => (
  <DynamicImport load={() => import('./views/Projects')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);

const Contact = props => (
  <DynamicImport load={() => import('./views/Contact')}>
    {Component => (Component === null ? <Loader /> : <Component {...props} />)}
  </DynamicImport>
);

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
  </Switch>
);

export default Routes;
