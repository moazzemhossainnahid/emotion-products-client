import React from 'react';
import { useTranslation } from 'react-i18next';

const LuxuryCollection = () => {
    const {t} = useTranslation();
    return (
        <div className='bg-[#03394A] py-20 relative px-5 w-full'>
            <img src="https://i.ibb.co/GnBBrqG/Arrow-11.png" alt="" className="absolute top-20 hidden md:block left-10 w-20" />
            <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-3/5 space-y-3">
                    <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 w-5/6 text-white ">{t('homeLuxuryCollection.title')}</h3>
                    <p className="text-[#8F969C]">{t('homeLuxuryCollection.desc1')}</p>
                    <p className="text-[#8F969C]">{t('homeLuxuryCollection.desc2')}</p>
                    <p className="text-[#8F969C] font-bold">{t('homeLuxuryCollection.desc3')} </p>
                </div>
                <div className="w-full md:w-2/5">
                    <img src="https://globaldesignnews.com/wp-content/uploads/2022/07/GDN_OLALA_PD22_1.jpeg" alt="" className="w-full p-5 rounded-2xl mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default LuxuryCollection;