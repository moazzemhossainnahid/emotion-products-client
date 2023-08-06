import React from 'react';
import { useTranslation } from 'react-i18next';

const OurWorkingProcess = () => {
    const {t} = useTranslation();


    return (
        <div className='w-full text-center py-10 p-5'>
            <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 text-gray-700 ">{t('homeOurWorkingProcess.title')} </h3>
            {/* <p className="">It is a long established fact that a reader will be distracted by the readable content of a page</p> */}
            <div className="py-7 w-full md:w-4/5 mx-auto text-left flex flex-col md:flex-row gap-5 justify-between items-center">
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/xFKXQtf/Group-200.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">{t('homeOurWorkingProcess.title1')} </h3>
                    <p className="text-sm">{t('homeOurWorkingProcess.desc1')} </p>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/L0rgQ6z/Group-199.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">{t('homeOurWorkingProcess.title2')} </h3>
                    <p className="text-sm">{t('homeOurWorkingProcess.desc2')} </p>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/9bq6z32/Group-201.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">{t('homeOurWorkingProcess.title3')} </h3>
                    <p className="text-sm">{t('homeOurWorkingProcess.desc3')} </p>
                </div>
            </div>

        </div>
    );
};

export default OurWorkingProcess;