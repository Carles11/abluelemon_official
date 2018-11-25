import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ButtonIconMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover .bars {
    background: #15b6cd;
  }
`;

const Bar = styled.div`
  background: white;
  width: 21px;
  height: 3px;
  margin-bottom: 4px;
  transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
`;

const Bar1 = styled(Bar)`
  transform-origin: top left;
  ${props =>
    props.active &&
    css`
      transform: rotate(45deg);
    `}
`;

const Bar2 = styled(Bar)`
  opacity: 1;
  ${props =>
    props.active &&
    css`
      opacity: 0;
    `}
`;

const Bar3 = styled(Bar)`
  transform-origin: bottom left;
  ${props =>
    props.active &&
    css`
      transform: rotate(-45deg);
    `}
`;

const IconMenu = props => {
  const [active, setActive] = useState(false);
  const { className, handleIconClick } = props;

  function handleClick() {
    setActive(!active);
    handleIconClick(active);
  }

  useEffect(() => {
    if (!props.visible && active) {
      setActive(false);
    }
  });

  return (
    <ButtonIconMenu
      className={className}
      onClick={handleClick}
      arial-label='show/hide menu'>
      <Bar1 active={active} className='bars' />
      <Bar2 active={active} className='bars' />
      <Bar3 active={active} className='bars' />
    </ButtonIconMenu>
  );
};

IconMenu.propTypes = {
  className: PropTypes.string,
  handleIconClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default IconMenu;