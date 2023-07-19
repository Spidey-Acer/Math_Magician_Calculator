import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {label}
  </button>
);

// Props Validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
