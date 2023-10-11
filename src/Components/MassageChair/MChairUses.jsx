import React from 'react';
import { useTranslation } from 'react-i18next';

const MChairUses = () => {
    const {t} = useTranslation();

    return (
        <div className='bg-[#ffffff] py-7'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full mx-auto pt-10">
                <div data-aos="fade-down" data-aos-duration="1000" className="w-full md:w-2/6  mx-auto relative">
                    <img src="https://i.ibb.co/qJm7dDg/Screenshot-8.png" alt="" className="w-5/6 relative md:absolute md:left-5 md:-top-44 flex justify-center items-center mx-auto" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-4/6 mx-auto p-5">
                    <h3 className="text-2xl font-bold text-dark md:w-2/3">{t('mchair.uses.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/ss8GzgH/Vector.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t1')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('mchair.uses.d1')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/kKSXVCt/Vector-1.png " alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t2')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('mchair.uses.d2')}</p>

                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/xznr85F/69840.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t3')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('mchair.uses.d3')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/BVY5Q54/4327360.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t4')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('mchair.uses.d4')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MChairUses;