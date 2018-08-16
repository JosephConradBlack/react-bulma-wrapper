import PropTypes from 'prop-types';

const withTextWeightHelper = ({ textWeight }) => {
  return {
    'has-text-weight-light': textWeight === 'light',
    'has-text-weight-normal': textWeight === 'normal',
    'has-text-weight-semibold	': textWeight === 'semibold',
    'has-text-weight-bold	': textWeight === 'bold'
  };
};

export const withTextWeightPropTypes = {
  textWeight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold'])
};

export default withTextWeightHelper;
