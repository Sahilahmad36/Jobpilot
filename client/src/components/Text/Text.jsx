import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text ${size} ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(["textxs", "texts", "textmd"]),
};

export { Text };
