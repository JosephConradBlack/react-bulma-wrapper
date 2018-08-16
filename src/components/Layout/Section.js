import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Section = ({ children, medium, large, ...rest }) => {
  const cls = cn('section', {
    'is-medium': medium,
    'is-large': large
  });
  return <section className={cls}>{children}</section>;
};
Section.propTypes = {
  children: PropTypes.node,
  medium: PropTypes.bool,
  large: PropTypes.bool
};
export default Section;
