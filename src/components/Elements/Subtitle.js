import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withTypographyHelpers, {
  withTypographyPropTypes
} from '../util/typography';

const SubTitle = ({ children, ...rest }) => {
  const subTitleClass = cn('subtitle', {
    ...withTypographyHelpers(rest)
  });
  return <h2 className={subTitleClass}>{children}</h2>;
};

SubTitle.propTypes = {
  children: PropTypes.node,
  ...withTypographyPropTypes
};
export default SubTitle;
