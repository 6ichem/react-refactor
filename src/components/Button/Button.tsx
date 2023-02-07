import { ReactNode, FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

// Extending our props to get the default HTML element prop types
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, ...rest }) => (
  // Binding the rest of the props that are not defined in the component
  <button className={styles.button} {...rest}>
    {children}
  </button>
);

export default Button;
