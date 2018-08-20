import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import './DoczWrapper.scss';

const DoczWrapper = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

DoczWrapper.propTypes = {
  children: PropTypes.node
};

export default DoczWrapper;
