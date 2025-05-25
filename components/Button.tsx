import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = { 
  variant: "primary" | "secondary" | "text";
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, variant, icon, ...rest } = props;

  return (
    <button className={twMerge(
      "px-6 h-11 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2",
      variant === "primary" && "bg-red-orange-500 text-white",
      variant === "secondary" && "",
      variant === "text" && "h-auto px-0 border-transparent",
      className
    )} {...rest}>
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  )
}

export default Button;