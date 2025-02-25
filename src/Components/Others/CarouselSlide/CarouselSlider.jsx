import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const breakPoints = {
  "(min-width: 1px)": { slides: { perView: 2, spacing: 5 } },
  "(min-width: 480px)": { slides: { perView: 4, spacing: 10 } },
};

const CarouselSlider = ({ setImage, mc1, mc2, mc3, mc4 }) => {
  const [sliderRef] = useKeenSlider({
    breakpoints: breakPoints,
    loop: true,
  });

  return (
    <div className="w-4/5 mx-auto">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <img
            onClick={() => setImage("first")}
            className="h-20 w-28 border border-primary bg-white cursor-pointer"
            src={mc1}
            alt=""
          />
        </div>
        <div className="keen-slider__slide">
          <img
            onClick={() => setImage("second")}
            className="h-20 w-28 border border-primary bg-white cursor-pointer"
            src={mc2}
            alt=""
          />
        </div>
        <div className="keen-slider__slide">
          <img
            onClick={() => setImage("third")}
            className="h-20 w-28 border border-primary bg-white cursor-pointer"
            src={mc3}
            alt=""
          />
        </div>
        <div className="keen-slider__slide">
          <img
            onClick={() => setImage("fourth")}
            className="h-20 w-28 border border-primary bg-white cursor-pointer"
            src={mc4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
