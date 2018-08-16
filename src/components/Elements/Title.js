import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withTypographyHelpers, {
  withTypographyPropTypes
} from '../util/typography';

const Title = ({ children, spaced, ...rest }) => {
  const titleClass = cn('title', {
    'is-spaced': spaced,
    ...withTypographyHelpers(rest)
  });
  return <h1 className={titleClass}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node,
  ...withTypographyPropTypes
};
export default Title;
