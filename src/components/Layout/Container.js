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
  /** test */
  children: PropTypes.node,
  fluid: PropTypes.bool,
  widescreen: PropTypes.bool,
  fullHd: PropTypes.bool,
  /** test2 */
  ...withTypographyPropTypes
};

export default Container;
