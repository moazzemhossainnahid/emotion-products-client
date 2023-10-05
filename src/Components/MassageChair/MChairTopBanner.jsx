import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Slide } from 'react-reveal';

const MChairTopBanner = () => {
    return (
        <div className="container bg-white h-[80vh] px-7 mx-auto w-full text-black">
            <div className='flex h-full flex-col md:flex-row justify-between gap-3 py-10 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 style={{ fontFamily: 'Silk Serif' }} className='text-center text-2xl sm:text-5xl sm:text-left'>Get a Full Body Massage</h2>
                    <p className='text-center text-sm sm:text-left pt-5 pb-3'>Ever wondered if a massage chair can be your therapist who can relax your body and contribute to a better mood? With this massage chair, you can rest your neck and trunk. Combined with pinching and pulling movements it relieves your tired neck and shoulder muscles after a long day at the office. It helps you get rid of the burdens and forget the tension and pain. Further, it improves the flexibility and mobility of the thoracic muscles. Additionally, it strengthens the paraspinal muscles. With that said, you can get long-term effects on posture and prevent back pain.</p>
                    <p className='text-center text-sm sm:text-left pt-5 pb-7'>And that is not all! It stimulates pressure points in your body and improves blood flow to increase lower limb relaxation.</p>
                    {/* <Slide bottom duration={2500}>
                        <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black border-0 rounded'>
                            <p className=" flex gap-2">Request An Appointment <FaAngleRight /></p>
                        </button>
                    </Slide> */}
                </div>
                <div className='w-full md:w-3/6 relative overflow-hidden mx-auto'>
                    <img className='w-3/5 p-5 mx-auto z-20 relative' src="https://i.ibb.co/C1zRRQW/Screenshot-9.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MChairTopBanner;