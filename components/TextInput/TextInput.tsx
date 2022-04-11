import styles from "./TextInput.module.scss";
import cn from "classnames";
import Icon from "../Icon";

type TextInputProps = {
  placeholder?: string;
};

const TextInput = ({ placeholder }: TextInputProps) => {
  return (
    <div className={cn(styles.container, "mt-16")}>
      <input
        type="text"
        className={cn(styles.textinput)}
        placeholder={placeholder}
      />
      <div className={styles.after}>
        <Icon iconType="filter" />
      </div>
    </div>
  );
};

export default TextInput;
