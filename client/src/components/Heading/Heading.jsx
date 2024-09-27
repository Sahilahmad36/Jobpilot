import React from "react";
import "./Heading.css"; // Import the CSS file

const Heading = ({ children, className = "", size = "textlg", as, ...restProps }) => {
  const Component = as || "h6"; // Default element is h6, can be overridden

  return (
    <Component className={`heading ${className} ${size}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
