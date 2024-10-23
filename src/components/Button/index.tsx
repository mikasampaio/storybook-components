import { IconType } from "react-icons";
import * as B from "./styles";
import { ButtonProps } from "./types";
import * as Icons from "react-icons/md";

export default function Button({
  primary = false,
  backgroundColor,
  label,
  fullWidth = false,
  onClick,
  leftIcon,
  rightIcon,
  size,
  ...props
}: ButtonProps) {
  const LeftIconComponent: IconType | null = leftIcon ? Icons[leftIcon] : null;
  const RightIconComponent: IconType | null = rightIcon
    ? Icons[rightIcon]
    : null;

  return (
    <B.Button
      label={label}
      style={{ backgroundColor }}
      primary={primary}
      fullWidth={fullWidth}
      onClick={onClick}
      type="button"
      size={size}
      {...props}
    >
      {LeftIconComponent && <LeftIconComponent fontSize={16} />}

      {label}

      {RightIconComponent && <RightIconComponent fontSize={16} />}
    </B.Button>
  );
}
