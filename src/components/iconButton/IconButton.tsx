import React from "react";
import cx from "classnames";
import "./iconButton.css";

type IconButtonPropsType = {
  icon: React.ReactNode;
  clickHandler: () => void;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
};

export const IconButton: React.FC<IconButtonPropsType> = ({
  className,
  icon,
  clickHandler,
  disabled,
  selected = false,
}) => (
  <button
    onClick={clickHandler}
    className={cx(
      "rounded-lg w-8 h-8 border flex items-center justify-center",
      {
        selected: selected === true,
        default: selected === false,
        "bg-gray-300 text-gray-600 cursor-not-allowed": disabled,
      },
      className
    )}
  >
    {icon}
  </button>
);
