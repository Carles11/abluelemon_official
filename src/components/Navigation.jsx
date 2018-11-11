import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about-me'>About</Link>
    <Link to='/projects'>Projects</Link>
  </nav>
);

export default Navigation;
