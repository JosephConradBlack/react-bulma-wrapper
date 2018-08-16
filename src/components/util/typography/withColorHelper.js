import PropTypes from 'prop-types';

const withColorHelper = ({ color }) => {
  return {
    'has-text-white': color === 'white',
    'has-text-black': color === 'black',
    'has-text-light': color === 'light',
    'has-text-dark': color === 'dark',
    'has-text-primary': color === 'primary',
    'has-text-info': color === 'info',
    'has-text-link': color === 'link',
    'has-text-success': color === 'success',
    'has-text-warning': color === 'warning',
    'has-text-danger': color === 'danger',
    'has-text-black-bis': color === 'black-bis',
    'has-text-black-ter': color === 'black-ter',
    'has-text-grey-darker': color === 'grey-darker',
    'has-text-grey-dark': color === 'grey-dark',
    'has-text-grey': color === 'grey',
    'has-text-grey-light': color === 'grey-light',
    'has-text-grey-lighter': color === 'grey-lighter',
    'has-text-white-ter': color === 'white-ter',
    'has-text-white-bis': color === 'white-bis'
  };
};

export const withColorPropTypes = {
  color: PropTypes.oneOf([
    'white',
    'black',
    'light',
    'dark',
    'primary',
    'info',
    'link',
    'success',
    'warning',
    'danger',
    'black-bis',
    'black-ter',
    'grey-darker',
    'grey-dark',
    'grey',
    'grey-light',
    'grey-lighter',
    'white-ter',
    'white-bis'
  ])
};

export default withColorHelper;
