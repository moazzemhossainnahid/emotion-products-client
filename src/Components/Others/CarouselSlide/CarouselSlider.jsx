import React from "react";
import Carousel from "react-elastic-carousel";

// import "../GlobalCarousel/GlobalCarousel.css";
import Item from "./Items";


const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 480, itemsToShow: 4 },
];

const CarouselSlider = ({ setImage }) => {

  const mc1 = "https://i.ibb.co/8b1XWNQ/DSC03611.jpg";
  const mc2 = "https://i.ibb.co/0M2WPDm/DSC03635.jpg";
  const mc3 = "https://i.ibb.co/FDtBZ8H/DSC03640.jpg";
  const mc4 = "https://i.ibb.co/BrrN1wd/DSC03643.jpg";

  return (
    <>

      <div className="w-full mx-auto">
        <Carousel
          showArrows={false}
          pagination={false}
          breakPoints={breakPoints}
        >
          <Item>
            <img
              onClick={() => setImage("first")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={mc1}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("second")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={mc2}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("third")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={mc3}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("fourth")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={mc4}
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider;