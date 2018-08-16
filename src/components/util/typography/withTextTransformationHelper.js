import PropTypes from 'prop-types';

const withTextTransformationHelper = ({
  capitalized,
  lowercase,
  uppercase,
  italic
}) => {
  return {
    'is-capitalized': capitalized,
    'is-lowercase': lowercase,
    'is-uppercase': uppercase,
    'is-italic': italic
  };
};

export const withTextTransformationPropTypes = {
  capitalized: PropTypes.bool,
  lowercase: PropTypes.bool,
  uppercase: PropTypes.bool,
  italic: PropTypes.bool
};

export default withTextTransformationHelper;
