import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { GoThreeBars, GoPlus } from 'react-icons/go';

import NavigationItem from './Navigation-item';

const nav_data = [
  { url: '/', label: 'HOME' },
  { url: '/projects', label: 'PROJECTS' },
  { url: '/contact', label: 'CONTACT' },
];

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  z-index: 1001;
`;

const iconMenuStyles = css`
  position: relative;
  display: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.5s;
  z-index: 1001;

  &:hover {
    color: #15b6cd;
  }

  @media only screen and (max-width: 649px) {
    display: block;
  }
`;

const iconMenuClose = css`
  transform: rotate(45deg);
`;

const IconList = styled(GoThreeBars)`
  ${iconMenuStyles}
`;

const IconClose = styled(GoPlus)`
  ${iconMenuStyles}
  ${iconMenuClose}
`;

const ListMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 649px) {
    position: absolute;
    top: 0;
    left: -100%;
    flex-direction: column;
    background: #262938;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    ${props =>
      props.show &&
      css`
        left: 0;
        opacity: 0.9;
      `}
  }
`;

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Nav>
      {visible && <IconClose onClick={handleClick} />}
      {!visible && <IconList onClick={handleClick} />}
      <ListMenu show={visible}>
        {nav_data.map(nav => (
          <NavigationItem key={nav.label} label={nav.label} url={nav.url} />
        ))}
      </ListMenu>
    </Nav>
  );
};

export default Navigation;
