import React from 'react';
import { useTranslation } from 'react-i18next';

const MChairBestMeterials = () => {
    const {t} = useTranslation();

    return (
        <div className='w-full pt-20'>
            <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between py-10">
                <div className="w-full md:w-4/6 mx-auto p-3">
                    <h3 className="text-2xl md:text-3xl font-semibold capitalize pb-5">{t('mchair.bestMeterials.title')}</h3>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-start">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">{t('mchair.bestMeterials.t1')}</h3>
                            <p className="text-sm">{t('mchair.bestMeterials.d1')}</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">{t('mchair.bestMeterials.t2')}</h3>
                            <p className="text-sm">{t('mchair.bestMeterials.d2')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-start">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">{t('mchair.bestMeterials.t3')}</h3>
                            <p className="text-sm">{t('mchair.bestMeterials.d3')}</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">{t('mchair.bestMeterials.t4')}</h3>
                            <p className="text-sm">{t('mchair.bestMeterials.t4')}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/6 flex justify-center mx-auto">
                    <img src="https://i.ibb.co/7VSJ4ZF/Screenshot-10.png" alt="" className="p-5 flex justify-center" />
                </div>
            </div>
        </div>
    );
};

export default MChairBestMeterials;