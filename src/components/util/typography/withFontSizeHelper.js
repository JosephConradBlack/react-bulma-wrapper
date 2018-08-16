import PropTypes from 'prop-types';

const withFontSizeHelper = ({ size }) => {
  return {
    'is-size-1': size === 1,
    'is-size-2': size === 2,
    'is-size-3': size === 3,
    'is-size-4': size === 4,
    'is-size-5': size === 5,
    'is-size-6': size === 6,
    'is-size-7': size === 7
  };
};

export const withFontSizePropTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])
};

export default withFontSizeHelper;
