import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, className }) => (
  <button type="button" className={className}>
    {label}
  </button>
);

// Props Validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
