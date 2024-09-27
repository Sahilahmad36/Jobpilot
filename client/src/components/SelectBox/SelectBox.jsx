import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import "./SelectBox.css"; // Import the CSS file for styles

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "square",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    return (
      <div className={`selectbox-container ${className} ${shape} ${size}`}>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              borderColor: "gray",
              boxShadow: "none",
              "&:hover": { borderColor: "darkgray" },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#0a65cc" : "transparent",
              color: state.isSelected ? "#ffffff" : "#000000",
              "&:hover": {
                backgroundColor: "#0a65cc",
                color: "#ffffff",
              },
            }),
          }}
          {...restProps}
        />
        {children}
      </div>
    );
  }
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
};

export { SelectBox };
