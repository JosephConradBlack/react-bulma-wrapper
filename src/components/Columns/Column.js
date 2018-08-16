import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const withColumnSizeHelper = (prop, prefix = '', suffix = '') => {
  const obj = {};
  obj[`is${prefix}-four-fifths${suffix}`] = prop === 'four-fifths';
  obj[`is${prefix}-three-quarters${suffix}`] = prop === 'three-quarters';
  obj[`is${prefix}-two-thirds${suffix}`] = prop === 'two-thirds';
  obj[`is${prefix}-three-fifths${suffix}`] = prop === 'three-fifths';
  obj[`is${prefix}-half${suffix}`] = prop === 'half';
  obj[`is${prefix}-two-fifths${suffix}`] = prop === 'two-fifths';
  obj[`is${prefix}-one-third${suffix}`] = prop === 'one-third';
  obj[`is${prefix}-one-quarter${suffix}`] = prop === 'one-quarter';
  obj[`is${prefix}-one-fifth${suffix}`] = prop === 'one-fifth';
  obj[`is${prefix}-2${suffix}`] = prop === 2;
  obj[`is${prefix}-3${suffix}`] = prop === 3;
  obj[`is${prefix}-4${suffix}`] = prop === 4;
  obj[`is${prefix}-5${suffix}`] = prop === 5;
  obj[`is${prefix}-6${suffix}`] = prop === 6;
  obj[`is${prefix}-7${suffix}`] = prop === 7;
  obj[`is${prefix}-8${suffix}`] = prop === 8;
  obj[`is${prefix}-9${suffix}`] = prop === 9;
  obj[`is${prefix}-10${suffix}`] = prop === 10;
  obj[`is${prefix}-11${suffix}`] = prop === 11;
  return obj;
};

const Column = ({
  children,
  narrow,
  narrowMobile,
  narrowTablet,
  narrowTouch,
  narrowDesktop,
  narrowWidescreen,
  narrowFullHd,
  size,
  offset,
  sizeMobile,
  sizeTablet,
  sizeDesktop,
  sizeWidescreen,
  sizeFullHd,

  ...rest
}) => {
  const columnClass = cn('column', {
    'is-narrow': narrow,
    'is-narrow-mobile': narrowMobile,
    'is-narrow-tablet': narrowTablet,
    'is-narrow-touch': narrowTouch,
    'is-narrow-desktop': narrowDesktop,
    'is-narrow-widescreen': narrowWidescreen,
    'is-narrow-fullHd': narrowFullHd,

    ...withColumnSizeHelper(size),
    ...withColumnSizeHelper(offset, '-offset'),

    ...withColumnSizeHelper(sizeMobile, '', '-mobile'),
    ...withColumnSizeHelper(sizeTablet, '', '-tablet'),
    ...withColumnSizeHelper(sizeDesktop, '', '-desktop'),
    ...withColumnSizeHelper(sizeWidescreen, '', '-widescreen'),
    ...withColumnSizeHelper(sizeFullHd, '', '-fullHd')
  });

  return <div className={columnClass}>{children}</div>;
};

const sizeValues = [
  'four-fifths',
  'three-quarters',
  'two-thirds',
  'three-fifths',
  'half',
  'two-fifths',
  'one-third',
  'one-quarter',
  'one-fifth',
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
];

Column.propTypes = {
  children: PropTypes.node,

  /* Column will only take up the space it needs, other columns will fill remaining space*/
  narrow: PropTypes.bool,
  narrowMobile: PropTypes.bool,
  narrowTablet: PropTypes.bool,
  narrowTouch: PropTypes.bool,
  narrowDesktop: PropTypes.bool,
  narrowWidescreen: PropTypes.bool,
  narrowFullHd: PropTypes.bool,
  /* Define the size of a column based on words (four-fifths) or column numbers (1-12)*/
  size: PropTypes.oneOf(sizeValues),
  sizeMobile: PropTypes.oneOf(sizeValues),
  sizeTablet: PropTypes.oneOf(sizeValues),
  sizeDesktop: PropTypes.oneOf(sizeValues),
  sizeWidescreen: PropTypes.oneOf(sizeValues),
  sizeFullHd: PropTypes.oneOf(sizeValues),
  /* Define the offset of a column based on words (four-fifths) or column numbers (1-12)*/
  offset: PropTypes.oneOf(sizeValues)
};
export default Column;
