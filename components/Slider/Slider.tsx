import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import styles from "./Slider.module.scss";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import Icon from "../Icon";
import cn from "classnames";

const countries = [
  "Испания",
  "Франция",
  "Сент Винсент и Гренадины",
  "Португалия",
  "Саудовская аравия",
  "Германия",
  "Греция",
  "ЮАР",
];

const Slider = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{countries[activeSlide]}</div>
      <div className={cn(styles.slider, "no-select")}>
        <Icon
          className={cn("no-shrink", styles.leftArrow)}
          iconType="leftArrow"
          onClick={() => swiper?.slidePrev()}
        />
        <div className={styles.sliderWrapper}>
          <Swiper
            onSwiper={setSwiper}
            modules={[FreeMode]}
            spaceBetween={28}
            freeMode={true}
            slidesPerView={"auto"}
            onSlideChange={(swiper) =>
              setActiveSlide(swiper.activeIndex % countries.length)
            }
            loop={true}
            centeredSlides={true}
          >
            {countries.map((country) => (
              <SwiperSlide key={country}>{country}</SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.divider} />
        </div>
        <Icon
          className={cn("no-shrink", styles.rightArrow)}
          iconType="rightArrow"
          onClick={() => swiper?.slideNext()}
        />
      </div>
      <div className={cn(styles.subtitle, "pt-12 pb-24")}>
        Мир Breezzor огромный, исследуй его!
      </div>
    </div>
  );
};

export default Slider;
