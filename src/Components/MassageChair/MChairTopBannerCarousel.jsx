import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';

const MChairTopBannerCarousel = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };

    const SliderData = [
        {
            img: 'https://i.ibb.co/b1xjqTb/Rectangle-111.png',
            title: 'Protect Your Vehicle',
            desc: 'We make Sure that, to give you a premium Carport service'
        },
        {
            img: 'https://i.ibb.co/5kYFf7r/Rectangle-111.png',
            title: 'Earning for a Lifetime',
            desc: 'From free online courses to advanced degrees and executive education'
        },
        {
            img: 'https://i.ibb.co/37G57Y2/Rectangle-111-1.png',
            title: 'Keep Learning',
            desc: 'Hagwart can help you meet your goals for life and professional advancement.'
        },
        {
            img: 'https://i.ibb.co/h98jKxF/Rectangle-38.png',
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
                                        <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black rounded'>
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

export default MChairTopBannerCarousel;