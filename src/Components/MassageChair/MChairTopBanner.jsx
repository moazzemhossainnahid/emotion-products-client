import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleRight } from 'react-icons/fa';
import { Slide } from 'react-reveal';

const MChairTopBanner = () => {
    const {t} = useTranslation();
    return (
        <div className="container bg-white h-[80vh] px-7 mx-auto w-full text-black">
            <div className='flex h-full flex-col md:flex-row justify-between gap-3 py-10 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 style={{ fontFamily: 'Helvetica' }} className='text-center text-2xl sm:text-5xl sm:text-left'>{t('mchair.topBanner.title')}</h2>
                    <p className='text-center text-sm sm:text-left pt-5 pb-3'>{t('mchair.topBanner.desc1')}</p>
                    <p className='text-center text-sm sm:text-left pt-5 pb-7'>{t('mchair.topBanner.desc2')}</p>
                    {/* <Slide bottom duration={2500}>
                        <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black border-0 rounded'>
                            <p className=" flex gap-2">Request An Appointment <FaAngleRight /></p>
                        </button>
                    </Slide> */}
                </div>
                <div className='w-full md:w-3/6 relative overflow-hidden mx-auto'>
                    <img className='w-3/5 border border-primary mx-auto z-20 relative' src="https://i.ibb.co/C1zRRQW/Screenshot-9.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MChairTopBanner;