import React from "react";

const sizeClasses = {
  xs: "font-medium text-[10px]",
  s: "font-normal text-xs",
  md: "font-medium text-sm",
  lg: "font-medium text-base",
  xl: "font-bold text-lg",
  "2xl": "font-medium text-xl",
  "3xl": "font-bold text-2xl md:text-[22px] sm:text-xl",
  "4xl": "font-bold sm:text-2xl md:text-[26px] text-[28px]",
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
