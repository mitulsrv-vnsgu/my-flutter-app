import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillGreen700: "bg-green_700",
  FillIndigo400: "bg-indigo_400",
  FillAmber300: "bg-amber_300",
  FillRed600: "bg-red_600",
  FillWhiteA700: "bg-white_A700",
  FillRed6001_2: "bg-red_600",
  FillGreen7001_2: "bg-green_700",
  FillBluegray900: "bg-bluegray_900",
};

const sizes = { sm: "pt-1" };

const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      onChange,

      variant,
      size,
      id = "radio_id",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    const handleChange = (event) => {
      setValue(event.target.checked);
      if (onChange) onChange(!!event?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,

  variant: PropTypes.oneOf([
    "FillGreen700",
    "FillIndigo400",
    "FillAmber300",
    "FillRed600",
    "FillWhiteA700",
    "FillRed6001_2",
    "FillGreen7001_2",
    "FillBluegray900",
  ]),
  size: PropTypes.oneOf(["sm"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { Radio };
