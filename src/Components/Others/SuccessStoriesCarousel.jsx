import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperStyle.css";



const SuccessStoriesCarousel = () => {


    const ourFeedback = [
        {
            name: "Jenifer Lopez",
            feedbackStarts: 3,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
        {
            name: "Jenifer Lopez",
            feedbackStarts: 2,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
        {
            name: "Jenifer Lopez",
            feedbackStarts: 1,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
        {
            name: "Jenifer Lopez",
            feedbackStarts: 5,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
    ];


    return (
        <div className=" bg-transparent mx-auto py-10">
            <section className=' w-full mx-auto text-gray-700'>
                <>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        // loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        keyboard={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Navigation, Pagination, Autoplay, Keyboard]}
                        className="mySwiper max-w-7xl h-full"
                    >
                        <div className="w-4/5 mx-auto bg-transparent">
                            {
                                ourFeedback.map((feedback, index) => {

                                    return (
                                        <div key={index} className="">
                                            <SwiperSlide className='text-center bg-transparent py-10 rounded-2xl px-5 space-y-2'>
                                                <img className="w-10 h-10 md:h-20 md:w-20 mx-auto rounded-full" src={feedback?.img} alt="" />
                                                <h3 className="text-sm md:text-xl font-bold">{feedback?.name}</h3>
                                                {

                                                    feedback?.feedbackStarts === 1 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    feedback?.feedbackStarts === 2 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    feedback?.feedbackStarts === 3 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    feedback?.feedbackStarts === 4 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    feedback?.feedbackStarts === 5 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-amber-600" checked />
                                                    </div>

                                                }

                                                <p className="text-xs break-words md:text-sm">{feedback?.feedbackComment.length > 100 ? `${feedback?.feedbackComment.slice(0, 100)}...` : feedback?.feedbackComment}</p>
                                            </SwiperSlide>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </Swiper>
                </>
            </section>

        </div>
    );
};


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }

};



export default SuccessStoriesCarousel;