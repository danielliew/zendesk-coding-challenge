import React from "react";
import styles from "./Button.module.css";
import cstyles from "../styles/Clickable.module.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ text, onClick, filled, disabled }) => {
  return (
    <div
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
