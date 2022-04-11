import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  title: string;
  color?: Color;
  className?: string;
};

type Color = "blue" | "white";

const Button = ({ title, color = "white", className }: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[color], className)}>
      {title}
    </button>
  );
};

export default Button;
