import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withTypographyHelpers, {
  withTypographyPropTypes
} from '../../util/typography';

const NavbarItem = ({ children, ...rest }) => {
  const navbarItemClass = cn('navbar-item', {
    ...withTypographyHelpers(rest)
  });
  return <a className={navbarItemClass}>{children}</a>;
};

NavbarItem.propTypes = {
  children: PropTypes.node,
  ...withTypographyPropTypes
};
export default NavbarItem;
