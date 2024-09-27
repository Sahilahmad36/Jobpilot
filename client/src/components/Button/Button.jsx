import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`btn ${shape ? `btn-${shape}` : ""} btn-${size} btn-${variant}-${color} ${className}`}
      {...restProps}
    >
      {leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "lg", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_100", 
    "blue_50", 
    "white_A700", 
    "blue_800", 
    "blue_gray_50"
  ]),
};

export { Button };
