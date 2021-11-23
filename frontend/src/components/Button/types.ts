import { CSSProperties } from "react";

export interface ButtonProps {
  text?: string | number;
  onClick?: () => void;
  filled?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
}
