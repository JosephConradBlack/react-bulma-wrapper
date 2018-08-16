import React from 'react';
import cn from 'classnames';

import NavbarBrand from './NavbarBrand';
import NavbarItem from './NavbarItem';
import NavbarMenu from './NavbarMenu';
import NavbarStart from './NavbarStart';
import NavbarEnd from './NavbarEnd';

const Navbar = ({
  children,
  // Colour props
  primary,
  link,
  info,
  success,
  warning,
  danger,
  light,
  dark,
  black,
  white
}) => {
  const navbarClass = cn('navbar', {
    'is-primary': primary,
    'is-link': link,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-light': light,
    'is-dark': dark,
    'is-black': black,
    'is-white': white
  });

  return (
    <nav aria-label="main navigation" className={navbarClass}>
      {children}
    </nav>
  );
};

Navbar.Brand = NavbarBrand;
Navbar.Item = NavbarItem;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
Navbar.End = NavbarEnd;

export default Navbar;
