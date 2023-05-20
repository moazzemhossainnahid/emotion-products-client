import React from "react";
import Carousel from "react-elastic-carousel";

// import "../GlobalCarousel/GlobalCarousel.css";
import Item from "./Items";


const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 480, itemsToShow: 4 },
];

const CarouselSlider = ({ setImage }) => {

  const shoes1 = "https://i.ibb.co/DCf6RQn/DSC03614-1.png";
  const shoes2 = "https://www.pngkey.com/png/full/250-2507384_supply-best-massage-chair-treadmill-in-the-world.png";
  const shoes3 = "https://www.pngkey.com/png/full/870-8705361_fujimedic-kumo-massage-chair-recliner.png";
  const shoes4 = "https://bodymassagepal.com/wp-content/uploads/2021/09/1-removebg.png";

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
              src={shoes1}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("second")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={shoes2}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("third")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={shoes3}
              alt=""
            />
          </Item>
          <Item>
            <img
              onClick={() => setImage("fourth")}
              className="h-20 w-28 bg-white cursor-pointer"
              src={shoes4}
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider;