import React from "react";
import styles from "./Button.module.css";
import cstyles from "../styles/Clickable.module.css";
import { ButtonProps } from "./types";

/**
 * a reusable Button component
 *
 * - text: button text
 * - onClick: callback
 * - filled: fill button and invert text color
 * - disabled: button will be shaded lighter
 * - style: Css overrrides
 */
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  filled,
  disabled,
  style,
}) => {
  return (
    <div
      style={style}
      className={`${styles.container} ${filled && styles.filled} ${
        disabled ? styles.disabled : cstyles.clickable
      }`}
      onClick={!disabled ? onClick : undefined}
    >
      {text}
    </div>
  );
};

export default Button;
