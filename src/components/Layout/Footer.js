import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Footer = ({ children, ...rest }) => {
  const titleClass = cn('footer', {});
  return <div className={titleClass}>{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.node
};
export default Footer;
