import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withTypographyHelpers, {
  withTypographyPropTypes
} from '../util/typography';

const Container = ({ children, fluid, widescreen, fullHd, ...rest }) => {
  const containerClass = cn('container', {
    'is-fluid': fluid,
    'is-widescreen': widescreen,
    'is-fullhd': fullHd,
    ...withTypographyHelpers(rest)
  });

  return <div className={containerClass}>{children}</div>;
};

Container.propTypes = {
  /** Children content to render inside the container. */
  children: PropTypes.node,
  /** Maintain 32px margins on the side of the container. */
  fluid: PropTypes.bool,
  /** Full-width container until the $widescreen breakpoint is hit. */
  widescreen: PropTypes.bool,
  /** Full-width container until the $fullHd breakpoint is hit. */
  fullHd: PropTypes.bool,
  ...withTypographyPropTypes
};

export default Container;
