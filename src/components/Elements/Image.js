import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Image = ({ src, alt, rounded, size }) => {
  const figureCls = cn('image', {
    'is-16x16': size === 16,
    'is-24x24': size === 24,
    'is-32x32': size === 32,
    'is-48x48': size === 48,
    'is-64x64': size === 64,
    'is-96x96': size === 96,
    'is-128x128': size === 128,
    'is-square': size === 'square',
    'is-1by1': size === '1by1',
    'is-5by4': size === '5by4',
    'is-4by3': size === '4by3',
    'is-3by2': size === '3by2',
    'is-5by3': size === '5by3',
    'is-16by9': size === '16by9',
    'is-2by1': size === '2by1',
    'is-3by1': size === '3by1',
    'is-4by5': size === '4by5',
    'is-3by4': size === '3by4',
    'is-2by3': size === '2by3',
    'is-3by5': size === '3by5',
    'is-9by16': size === '9by16',
    'is-1by2': size === '1by2',
    'is-1by3': size === '1by3'
  });

  const imgCls = cn({
    'is-rounded': rounded
  });

  return (
    <figure className={figureCls}>
      <img className={imgCls} alt={alt} src={src} />
    </figure>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf([
    16,
    24,
    32,
    48,
    64,
    128,
    'square',
    '5by4',
    '4by3',
    '3by2',
    '5by3',
    '16by9',
    '2by1',
    '3by1',
    '4by5',
    '3by4',
    '2by3',
    '3by5',
    '9by16',
    '1by1',
    '1by2',
    '1by3'
  ])
};
export default Image;
