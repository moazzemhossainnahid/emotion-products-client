import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Slide } from 'react-reveal';

const LuxuryRelaxation = () => {
    return (
        <div className="container bg-white h-[80vh] px-7 mx-auto w-full text-black">
            <div className='flex h-full flex-col md:flex-row justify-between gap-3 py-10 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 style={{ fontFamily: 'Helvetica' }} className='text-center text-2xl sm:text-5xl sm:text-left'>Where Elegance Meets Every Corner of Your Space</h2>
                    {/* <h2 style={{ fontFamily: 'Helvetica' }} className='text-center text-xl pt-5 sm:text-left'>Lorem ipsum dolor sit amet consectetur. </h2> */}
                    <p className='text-center text-sm sm:text-left pt-5 pb-7'>A collection of furniture that embodies a timeless charm, seamlessly merging aesthetics with functionality. Enrich your living spaces with pieces designed to endure trends and make a lasting impression.</p>
                    {/* <Slide bottom duration={2500}>
                        <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black border-0 rounded'>
                            <p className=" flex gap-2">Request An Appointment <FaAngleRight /></p>
                        </button>
                    </Slide> */}
                </div>
                <div className='w-full md:w-3/6 mx-auto'>
                    <img className='w-full object-cover border border-primary' src="https://i.ibb.co/XLqrmyS/Whats-App-Image-2023-05-18-at-1d5-42-21.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LuxuryRelaxation;