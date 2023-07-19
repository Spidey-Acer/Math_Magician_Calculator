import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {label}
  </button>
);

// Props Validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: 'btn btn-default',
};

export default Button;
