import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineBlack9000c: "bg-white_A700 shadow-bs",
  OutlineIndigo50: "bg-white_A700 border border-indigo_50 border-solid",
  OutlineIndigo501_2: "border border-indigo_50 border-solid",
  FillDeeporange300: "bg-deep_orange_300",
  FillGray50: "bg-gray_50",
};
const shapes = {
  srcRoundedBorder4: "rounded",
  RoundedBorder4: "rounded",
  RoundedBorder8: "rounded-lg",
  CustomBorderBL4: "rounded-bl rounded-br rounded-tr",
};
const sizes = {
  smSrc: "p-[13px]",
  mdSrc: "pb-4 pt-[22px] px-4",
  sm: "pb-1.5 pt-[13px] px-1.5",
  md: "pb-[22px] pt-[17px] px-[17px]",
  lg: "p-[19px]",
  xl: "pb-4 pt-[22px] px-4",
  "2xl": "p-[23px] sm:px-5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder4",
    "RoundedBorder4",
    "RoundedBorder8",
    "CustomBorderBL4",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray200",
    "srcFillGray50",
    "srcOutlineBlack9000c",
    "OutlineIndigo50",
    "OutlineIndigo501_2",
    "FillDeeporange300",
    "FillGray50",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md", "lg", "xl", "2xl"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
