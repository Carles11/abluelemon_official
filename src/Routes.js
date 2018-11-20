import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from './components/Loader.jsx';

const LoadLanding = 
  Loadable({
    loader: () => import(/* webpackChunkName: "landing" */'./views/Landing'),
    loading: Loader,
  });

  const LoadProjects = 
  Loadable({
    loader: () => import(/* webpackChunkName: "projects" */'./views/Projects'),
    loading: Loader,
  });

  const LoadContact = 
  Loadable({
    loader: () => import(/* webpackChunkName: "contact" */'./views/Contact'),
    loading: Loader,
  });

const Routes = () => (
  <Switch>
    <Route exact path='/' component={LoadLanding} />
    <Route path='/projects' component={LoadProjects} />
    <Route path='/contact' component={LoadContact} />
  </Switch>
);

export default Routes;
