import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Columns = ({
  children,
  mobile,
  desktop,
  gapless,
  multiline,
  sizeGap,
  centered,
  ...rest
}) => {
  const columnsClass = cn('columns', {
    'is-mobile': mobile,
    'is-desktop': desktop,
    'is-gapless': gapless,
    'is-multiline': multiline,
    'is-variable': sizeGap === 0 || sizeGap,
    'is-0': sizeGap === 0,
    'is-1': sizeGap === 1,
    'is-2': sizeGap === 2,
    'is-3': sizeGap === 3,
    'is-4': sizeGap === 4,
    'is-5': sizeGap === 5,
    'is-6': sizeGap === 6,
    'is-7': sizeGap === 7,
    'is-8': sizeGap === 8,
    'is-centered': centered
  });

  return <div className={columnsClass}>{children}</div>;
};

Columns.propTypes = {
  children: PropTypes.node,
  /* Whether or not the children column's should be centered*/
  centered: PropTypes.bool,
  /* Display columns side-by-side on mobile devices and wider*/
  mobile: PropTypes.bool,
  /* Display columns side-by-side on desktop devices and wider*/
  desktop: PropTypes.bool,
  /* Whether or not columns should be separated by a gap*/
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  sizeGap: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8])
};
export default Columns;
