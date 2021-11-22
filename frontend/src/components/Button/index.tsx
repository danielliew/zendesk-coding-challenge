import React from "react";
import styles from "./Button.module.css";
import cstyles from "../styles/Clickable.module.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ text, onClick, filled }) => {
  return (
    <div
      className={`${styles.container} ${filled && styles.filled} ${
        cstyles.clickable
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
