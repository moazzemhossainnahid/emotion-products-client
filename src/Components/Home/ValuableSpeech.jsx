import { t } from 'i18next';
import React from 'react';

const ValuableSpeech = () => {
    return (
        <div className='bg-white py-10'>
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row p-5 justify-between items-center gap-5">
                <div className="w-full md:w-2/5 mx-auto">
                    <img src="https://i.ibb.co/cwHf0pB/Picture-prive-foto-1.jpg" alt="" className="" />
                </div>
                <div className="w-full md:w-3/5 mx-auto md:pl-7">
                    <h3 className="text-2xl font-bold">{t('homeValueAbleSpeech.title')}</h3>
                    <div className="flex items-center pt-3">
                        <p className="h-1 bg-[#00C2FF] w-32"></p>
                        <p className="border-b border-[#00C2FF] w-20"></p>
                    </div>

                    <div className="space-y-5 w-4/5 pt-3">
                        <p className="">{t('homeValueAbleSpeech.desc1')}</p>
                        <p className="">{t('homeValueAbleSpeech.desc2')}</p>
                        <p className="">{t('homeValueAbleSpeech.desc3')}</p>
                        <p className="">{t('homeValueAbleSpeech.desc4')}</p>
                        <p className="">{t('homeValueAbleSpeech.desc5')}</p>
                    </div>
                    <p className="py-2">{t('homeValueAbleSpeech.desc6')} </p>
                    <h3 className="text-md text-gray-500 italic">Edwin Eijsink & Timon Eijsink</h3>
                    {/* <h3 className="text-md text-gray-500 italic"> & </h3>
                    <h3 className="text-md text-gray-500 italic">Timon Eijsink</h3> */}
                </div>
            </div>
        </div>
    );
};

export default ValuableSpeech;