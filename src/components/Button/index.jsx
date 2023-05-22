import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder24: "rounded-[24px]",
  icbRoundedBorder6: "rounded-[6.665px]",
  icbRoundedBorder4: "rounded",
  icbCircleBorder28: "rounded-[28px]",
  icbCircleBorder16: "rounded-[16px]",
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder40: "rounded-[40px]",
  icbCircleBorder31: "rounded-[31px]",
  icbCircleBorder9: "rounded-[9.165px]",
  RoundedBorder4: "rounded",
  CircleBorder20: "rounded-[20px]",
  CircleBorder28: "rounded-[28px]",
  CircleBorder24: "rounded-[24px]",
  RoundedBorder10: "rounded-[10px]",
};
const variants = {
  icbFillGray50: "bg-gray_50",
  icbOutlineDeeporange300:
    "bg-white_A700 outline outline-[0.9px] outline-deep_orange_300",
  icbFillWhiteA700: "bg-white_A700",
  icbFillRed50: "bg-red_50",
  icbFillGray101: "bg-gray_101",
  icbFillYellow50: "bg-yellow_50",
  icbFillGray102: "bg-gray_102",
  icbFillGray51: "bg-gray_51",
  icbFillDeeporange300: "bg-deep_orange_300",
  icbOutlineIndigo50: "border border-indigo_50 border-solid",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbOutlineWhiteA700:
    "bg-deep_orange_300 outline outline-[4px] outline-white_A700",
  icbOutlineBluegray400:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_400",
  icbOutlineGreen700: "border-2 border-green_700 border-solid",
  icbOutlineBluegray800:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_800",
  icbFillRed600: "bg-red_600",
  FillGray100: "bg-gray_100",
  FillGray50: "bg-gray_50",
  FillDeeporange300: "bg-deep_orange_300",
  OutlineIndigo50: "border border-indigo_50 border-solid",
  FillBluegray900: "bg-bluegray_900",
  OutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid shadow-bs",
  FillIndigo400: "bg-indigo_400",
  FillGreen700: "bg-green_700",
  FillRed600: "bg-red_600",
  FillAmber300: "bg-amber_300",
  OutlineBluegray900: "border border-bluegray_900 border-solid",
  FillDeeporange50: "bg-deep_orange_50",
  FillRed40019: "bg-red_400_19",
  FillIndigo40019: "bg-indigo_400_19",
  FillWhiteA700: "bg-white_A700",
  FillBlack90066: "bg-black_900_66",
  FillGreen70063: "bg-green_700_63",
  FillRed54: "bg-red_54",
};
const sizes = {
  smIcn: "p-[3px]",
  mdIcn: "p-2",
  lgIcn: "p-[11px]",
  xlIcn: "p-3.5",
  "2xlIcn": "p-[17px]",
  "3xlIcn": "p-[21px] sm:px-5",
  "4xlIcn": "p-[26px] sm:px-5",
  sm: "p-[3px]",
  md: "p-1.5",
  lg: "p-[9px]",
  xl: "p-[13px]",
  "2xl": "p-[17px]",
  "3xl": "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder24",
    "icbRoundedBorder6",
    "icbRoundedBorder4",
    "icbCircleBorder28",
    "icbCircleBorder16",
    "icbCircleBorder20",
    "icbCircleBorder40",
    "icbCircleBorder31",
    "icbCircleBorder9",
    "RoundedBorder4",
    "CircleBorder20",
    "CircleBorder28",
    "CircleBorder24",
    "RoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "icbFillGray50",
    "icbOutlineDeeporange300",
    "icbFillWhiteA700",
    "icbFillRed50",
    "icbFillGray101",
    "icbFillYellow50",
    "icbFillGray102",
    "icbFillGray51",
    "icbFillDeeporange300",
    "icbOutlineIndigo50",
    "icbOutlineBlack9000c",
    "icbOutlineWhiteA700",
    "icbOutlineBluegray400",
    "icbOutlineGreen700",
    "icbOutlineBluegray800",
    "icbFillRed600",
    "FillGray100",
    "FillGray50",
    "FillDeeporange300",
    "OutlineIndigo50",
    "FillBluegray900",
    "OutlineBluegray200",
    "FillIndigo400",
    "FillGreen700",
    "FillRed600",
    "FillAmber300",
    "OutlineBluegray900",
    "FillDeeporange50",
    "FillRed40019",
    "FillIndigo40019",
    "FillWhiteA700",
    "FillBlack90066",
    "FillGreen70063",
    "FillRed54",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
    "4xlIcn",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
