import React from "react";
import PropTypes from "prop-types";
import "./Index.css"; 

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`input-label ${className} ${shape} ${variant} ${size} ${color}`}
      >
        {!!label && <span className="input-label-text">{label}</span>}
        {!!prefix && <span className="input-prefix">{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
          className="input-field"
        />
        {!!suffix && <span className="input-suffix">{suffix}</span>}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Input };
