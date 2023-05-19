import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';

const SofaTopBannerCarousel = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: dots => (
            <div
                className='-mt-32'
                style={{
                    marginTop: "-30px",
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul className='absolute hidden md:flex text-sm gap-2 items-center left-40' style={{ margin: "-70px" }}> <span className="-mt-4">01</span> {dots}  <span className="-mt-4">04</span> </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    content: "",
                    height: "2px",
                    width: "20px",
                    background: "#00C2FF",
                    color: "#00C2FF",
                    border: "1px blue solid #00C2FF"
                }}
            >
                <span className="text-transparent">{i + 1}</span>
            </div>

        )
    };

    const SliderData = [
        {
            img: 'https://i.ibb.co/XLqrmyS/Whats-App-Image-2023-05-18-at-1d5-42-21.jpg',
            title: 'Protect Your Vehicle',
            desc: 'We make Sure that, to give you a premium Carport service'
        },
        {
            img: 'https://i.ibb.co/sywyrRQ/Whats-App-Image-2023-05-18-at-d15-42-d21.jpg',
            title: 'Earning for a Lifetime',
            desc: 'From free online courses to advanced degrees and executive education'
        },
        {
            img: 'https://i.ibb.co/2PSshLg/Whats-App-Image-2023-05-18-dddat-15-42-21.jpg',
            title: 'Keep Learning',
            desc: 'Hagwart can help you meet your goals for life and professional advancement.'
        },
        {
            img: 'https://i.ibb.co/ZGDsvJG/Whats-App-ddd-Image-2023-05-18-at-15-42-20.jpg',
            title: 'Keep Learning',
            desc: 'Hagwart can help you meet your goals for life and professional advancement.'
        }
    ]
    

    return (
        <div className="-mb-2">
            <Slider {...settings}>
                {
                    SliderData.map((data, idx) => {
                        return (
                            <div key={idx} className={`bg-gradient-to-tr from-gray-400 to-gray-700 relative h-[60vh] md:h-[85vh] bg-cover bg-center`}>
                                <img
                                    src={data?.img}
                                    alt=""
                                    className="w-full absolute mix-blend-overlay h-full object-cover"
                                />
                                <div className="w-full text-center absolute bottom-40 space-y-3">
                                    <Slide top duration={1500}>
                                        <h3 className="text-3xl md:text-5xl text-white">{data?.title}</h3>
                                    </Slide>
                                    <Slide bottom duration={2000}>
                                        <p className="pb-5 text-gray-300 text-sm">{data?.desc}</p>
                                    </Slide>
                                    <Slide bottom duration={2500}>
                                        <button className='bg-[#00C2FF] justify-center border-0 btn btn-warning px-7 py-2 text-black rounded'>
                                            <p className=" flex gap-2">Make An Appointment <FaArrowRight /></p>
                                        </button>
                                    </Slide>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    );
};

export default SofaTopBannerCarousel;