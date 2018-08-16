import React from 'react';
import cn from 'classnames';

const NavbarMenu = ({ children, active, transparent }) => {
  const navbarMenuClass = cn('navbar-menu', {
    'is-active': active,
    'is-transparent': transparent
  });
  return <div className={navbarMenuClass}>{children}</div>;
};

export default NavbarMenu;
