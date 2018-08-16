import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import HeroHead from './HeroHead';
import HeroBody from './HeroBody';
import HeroFoot from './HeroFoot';

const Hero = ({
  children,
  primary,
  info,
  success,
  warning,
  danger,
  light,
  dark,
  bold,
  size,
  fullHeight
}) => {
  const heroClass = cn('hero', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-light': light,
    'is-dark': dark,
    'is-bold': bold,
    'is-medium': size === 'medium',
    'is-large': size === 'large',
    'is-fullheight': fullHeight
  });

  return <section className={heroClass}>{children}</section>;
};

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;

Hero.propTypes = {
  /** Children content to render inside the hero. */
  children: PropTypes.node,
  /** Display hero using 'primary' color */
  primary: PropTypes.bool,
  /** Display hero using 'info' color */
  info: PropTypes.bool,
  /** Display hero using 'success' color */
  success: PropTypes.bool,
  /** Display hero using 'warning' color */
  warning: PropTypes.bool,
  /** Display hero using 'danger' color */
  danger: PropTypes.bool,
  /** Display hero using 'light' color */
  light: PropTypes.bool,
  /** Display hero using 'dark' color */
  dark: PropTypes.bool,
  /** Display hero with a bold gradient */
  bold: PropTypes.bool,
  /** Increase the size of the Hero */
  size: PropTypes.oneOf(['medium', 'large']),
  /** Make the Hero take up the entire screen height */
  fullHeight: PropTypes.bool
};

export default Hero;
