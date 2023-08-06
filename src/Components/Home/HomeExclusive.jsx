import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomeExclusive = () => {
const navigate = useNavigate();
const {t} = useTranslation();
    return (
        <div className='w-full'>
            <div class='w-full flex flex-col bg-white md:flex-row items-center justify-between py-10 gap-5'>
                <div class="h-full w-full rounded-xl relative group" >
                    <div class="z-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-primary/50 to-transparent bg-gradient-to-t inset-x-0 bottom-0 text-white flex items-end">
                        <div className='w-4/5 mx-auto'>
                            <div class="p-4 space-y-3 text-xl text-center group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                <div class="font-bold text-2xl md:text-3xl">{t('homeHomeExclusive.title1')}</div>
                                <p class="opacity-90 text-sm text-white">{t('homeHomeExclusive.desc1')}</p>
                                <button onClick={() => navigate("/carport")} className='btn btn-primary mx-auto flex items-center gap-2 rounded hover:btn-warning'>{t('homeHomeExclusive.btn1')} <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <img alt="" class="object-cover w-full h-96 lg:h-[60vh] transition duration-300 ease-in-out" src="https://i.ibb.co/SmFRkTd/Rectangle-197.png" />
                </div>
                <div class="h-full w-full rounded-xl relative group" >
                    <div class="z-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-primary/50 to-transparent bg-gradient-to-t inset-x-0 bottom-0 text-white flex items-end">
                        <div className='w-4/5 mx-auto'>
                            <div class="p-4 space-y-3 text-xl text-center group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                <div class="font-bold text-2xl md:text-3xl">{t('homeHomeExclusive.title2')}</div>
                                <p class="opacity-90 text-sm text-white">{t('homeHomeExclusive.desc2')}</p>
                                <button onClick={() => navigate("/furniture")} className='btn btn-primary mx-auto flex items-center gap-2 rounded hover:btn-warning'>{t('homeHomeExclusive.btn2')} <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <img alt="" class="object-cover w-full h-96 lg:h-[60vh] transition duration-300 ease-in-out" src="https://i.ibb.co/dfH6MFZ/Rectangle-198.png" />
                </div>
            </div>
        </div>
    );
};

export default HomeExclusive;