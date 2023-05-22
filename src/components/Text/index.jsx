import React from "react";

const sizeClasses = {
  s: "font-normal text-xs",
  xl: "font-bold text-lg",
  "2xl": "font-medium text-xl",
  md: "font-medium text-sm",
  "3xl": "font-bold text-2xl md:text-[22px] sm:text-xl",
  "4xl": "font-bold sm:text-2xl md:text-[26px] text-[28px]",
  xs: "font-medium text-[10px]",
  lg: "font-medium text-base",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
