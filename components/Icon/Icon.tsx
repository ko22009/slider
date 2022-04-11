import { ImageProps } from "next/image";
import styles from "./Icon.module.scss";
import cn from "classnames";

type IconType = "leftArrow" | "rightArrow" | "filter";

type IconProps = Partial<ImageProps> & {
  iconType: IconType;
};

const Icon = ({ iconType, ...rest }: IconProps) => {
  return <div {...rest} className={cn(rest.className, styles[iconType])} />;
};

export default Icon;
