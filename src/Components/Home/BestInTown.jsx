import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const BestInTown = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className='w-full'>
            <div className="bg-[#231E1A] pt-10 ">
                <div className="w-4/5 h-full md:h-[70vh] mx-auto overflow-hidden">
                    <img src="https://i.ibb.co/TrnSTM8/Whats-App-Image-2023-0f5-14-at-19-06-13.jpg" alt="" className="h-full w-full rounded-t-3xl object-cover" />
                </div>
            </div>
            
            <div className="bg-[#FDFDFD] pb-10 w-full">
                <div className="w-4/5 px-10 mx-auto p-5 shadow bg-white">
                    <h3 style={{ fontFamily: 'Helvetica' }} className="text-2xl md:text-4xl pb-5 text-gray-700 ">{t('homeBestInTown.title')} </h3>
                    <div className="space-y-3">
                        <p className="py-1 text-sm">{t('homeBestInTown.desc1')} </p>
                        <p className="py-1 text-sm">{t('homeBestInTown.desc2')}</p>
                        <p className="py-1 text-sm">{t('homeBestInTown.desc3')}</p>
                        <p onClick={() => navigate("/carport")} className="pt-3 cursor-pointer font-bold text-sm">{t('homeBestInTown.desc4')} </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BestInTown;