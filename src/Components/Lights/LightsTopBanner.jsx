import React from 'react';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import { Slide } from 'react-reveal';

const LightsTopBanner = () => {
    return (
        <div className="container bg-white h-[80vh] px-7 mx-auto w-full text-black">
            <div className='flex h-full flex-col md:flex-row justify-between gap-3 py-10 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 style={{ fontFamily: 'Silk Serif' }} className='text-center text-2xl sm:text-5xl sm:text-left'>Protect Your Vehicle</h2>
                    <h2 style={{ fontFamily: 'Silk Serif' }} className='text-center text-xl pt-5 sm:text-left'>Lorem ipsum dolor sit amet consectetur. </h2>
                    <p className='text-center text-sm sm:text-left pt-5 pb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officiis repellat doloremque facere consequuntur voluptas rem nesciunt ab distinctio alias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officiis repellat doloremque facere consequuntur voluptas rem nesciunt ab distinctio alias.</p>
                    {/* <Slide bottom duration={2500}>
                        <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black border-0 rounded'>
                            <p className=" flex gap-2">Request An Appointment <FaAngleRight /></p>
                        </button>
                    </Slide> */}
                </div>
                <div className='w-full md:w-3/6 relative overflow-hidden mx-auto'>
                    <img className='w-2/3 mx-auto z-20 relative' src="https://freepngimg.com/thumb/lamp/158530-ceiling-lamp-png-download-free.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LightsTopBanner;