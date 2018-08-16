import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withTypographyHelpers, {
  withTypographyPropTypes
} from '../util/typography';

const Text = ({ children, fluid, widescreen, fullHd, ...rest }) => {
  const cls = cn({
    ...withTypographyHelpers(rest)
  });

  return <div className={cls}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.node,
  ...withTypographyPropTypes
};

export default Text;
