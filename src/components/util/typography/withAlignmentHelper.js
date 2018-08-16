import PropTypes from 'prop-types';

const withAlignmentHelper = ({ centered, justified, left, right }) => {
  return {
    'has-text-centered': centered,
    'has-text-justified': justified,
    'has-text-left': left,
    'has-text-right': right
  };
};

export const withAlignmentPropTypes = {
  centered: PropTypes.bool,
  justified: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool
};

export default withAlignmentHelper;

//todo: add prop definition here as well
