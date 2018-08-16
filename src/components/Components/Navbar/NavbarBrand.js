import React from 'react';
import cn from 'classnames';

const NavbarBrand = ({ children, hamburger, active }) => {
  const hamburgerClass = cn('navbar-burger', {
    'is-active': active
  });

  return (
    <div className="navbar-brand">
      {children}

      {hamburger && (
        <a
          role="button"
          className={hamburgerClass}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      )}
    </div>
  );
};

export default NavbarBrand;
