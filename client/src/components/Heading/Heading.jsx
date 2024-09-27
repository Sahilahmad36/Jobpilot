import React from "react";
import "./Heading.css"
const Heading = ({ children, className = "", size = "textlg", as, ...restProps }) => {
  const Component = as || "h6"; 

  return (
    <Component className={`heading ${className} ${size}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
