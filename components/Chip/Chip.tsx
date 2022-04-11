import cn from "classnames";
import styles from "./Chip.module.scss";

type ChipProps = {
  title: string;
  active: boolean;
  setActive: (active: boolean) => void;
};

const Chip = ({ title, active, setActive }: ChipProps) => {
  return (
    <div
      className={cn(styles.chip, { [styles.active]: active })}
      onClick={() => setActive(!active)}
    >
      {title}
    </div>
  );
};

export default Chip;
