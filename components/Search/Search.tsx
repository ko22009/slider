import styles from "./search.module.scss";
import Slider from "../Slider";
import Image from "next/image";
import background from "./background.png";
import Chip from "../Chip";
import { useState } from "react";
import Button from "../Button";
import cn from "classnames";
import TextInput from "../TextInput";

const chips = ["Пляжи", "Breezzor Pass", "Впечатления", "Маршруты"];

const Search = () => {
  const [activeChips, setActiveChips] = useState<Record<number, boolean>>({});
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image layout="fill" objectFit="cover" src={background} />
      </div>
      <div className="container">
        <Slider />
        <div className={styles.chips}>
          {chips.map((chip, i) => (
            <Chip
              setActive={(active) => {
                setActiveChips({ ...activeChips, [i]: active });
              }}
              key={chip}
              active={activeChips[i]}
              title={chip}
            />
          ))}
        </div>
        <TextInput placeholder="Поиск по стране, региону, городу, название пляжа" />
        <div className={cn(styles["button-container"], "mt-16")}>
          <Button title="На карте" className="mr-16" />
          <Button title="Все пляжи страны" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Search;
