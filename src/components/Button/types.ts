import React from "react";
import * as Icons from "react-icons/md";

export type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
