import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DiscoverExclusiveProducts = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();


    return (
        <div className=' w-full py-7'>
            <div className="w-full mx-auto bg-[url('https://i.ibb.co/Yb1FC84/Rectangle-174.png')] p-10 relative bg-cover">
                <div className=" bg-gradient-to-b from-[#fcfcfc69] to-[#e5e4e4c8] p-7 rounded w-full md:w-4/5 mx-auto">
                    <h3 className="text-gray-700 text-center font-bold text-2xl pb-7 md:text-3xl">{t('homeDiscoverExclusiveProducts.title')}</h3>
                    <div className="space-y-3">
                        <p className='text-sm'>{t('homeDiscoverExclusiveProducts.desc1')}</p>
                        <p className='text-sm'>{t('homeDiscoverExclusiveProducts.desc2')}</p>
                        <p className='text-sm'>{t('homeDiscoverExclusiveProducts.desc3')}</p>
                        <p onClick={() => navigate("/lights")} className="text-sm font-bold cursor-pointer pt-5">{t('homeDiscoverExclusiveProducts.desc4')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverExclusiveProducts;