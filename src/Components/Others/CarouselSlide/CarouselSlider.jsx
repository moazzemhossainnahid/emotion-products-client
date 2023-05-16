import React from "react";
import Carousel from "react-elastic-carousel";

// import "../GlobalCarousel/GlobalCarousel.css";
import Item from "./Items";


const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 480, itemsToShow: 4 },
];

const CarouselSlider = ({ setImage }) => {

  const logo1 = "https://i.ibb.co/DCf6RQn/DSC03614-1.png";
  const logo2 = "https://i.ibb.co/ngckL8y/Rectangle-160.png";
  const logo3 = "https://i.ibb.co/JpNfxSh/Rectangle-158.png";
  const logo4 = "https://i.ibb.co/CMg3hRt/Rectangle-151.png";

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
              className="h-20 w-28 cursor-pointer"
              src={logo1}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("second")}
              className="h-20 w-28 cursor-pointer"
              src={logo2}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("third")}
              className="h-20 w-28 cursor-pointer"
              src={logo3}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("forth")}
              className="h-20 w-28 cursor-pointer"
              src={logo4}
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider;