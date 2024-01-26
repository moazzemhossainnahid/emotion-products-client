import React from 'react';
import { ScrollRotate } from 'react-scroll-rotate';
import { useTranslation } from 'react-i18next';

const SofaVideos = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-[80vh] md:h-[95vh] py-7 md:mb-28">
            <div data-aos="fade-down" data-aos-duration="1000" className="bg-gradient-to-r from-[#1E120A] to-[#343434] rounded w-5/6 md:w-4/5 h-96 mx-auto relative">
                <div className="flex w-4/5 mx-auto justify-between items-center gap-3 pt-5">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{`Premium quality and watch our hottest Furniture videos`}</h3>
                    <div className="md:pr-20">
                        <ScrollRotate from={0} to={360} throttle={0.1} animationDuration={0.3}>
                            <img src="https://i.ibb.co/XZvKfRP/Group-75.png" alt="" className="" />
                        </ScrollRotate>
                    </div>
                </div>

                <div className="pt-7 h-full w-4/5 mx-auto">
                    <div className=" rounded backdrop-saturate-125 h-full w-full bg-cover bg-center">
                        <div className="flex flex-col justify-center items-center h-full">
                            <div className="hero-content w-full h-fit pt-7 text-center text-neutral-content">
                                <video className='rounded backdrop-saturate-125 h-full w-full' controls width="100%" height="100%">
                                    {/* <source src="/MS-131Plus.mp4" type="video/mp4" /> */}
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SofaVideos;