import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  z-index: 1001;
`

const globalStyles = css`
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  text-transform: uppercase;
`

const LinkStyled = styled(Link)`
  ${globalStyles}
`

const Navigation = () => (
  <Nav>
    <LinkStyled to='/'>Home</LinkStyled>
    <LinkStyled to='/about-me'>About</LinkStyled>
    <LinkStyled to='/projects'>Projects</LinkStyled>
  </Nav>
);

export default Navigation;
