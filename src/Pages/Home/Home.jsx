import React from 'react';
import TopBanner from '../../Components/Home/TopBanner';
import PremiumService from '../../Components/Home/PremiumService';
import ValuableSpeech from '../../Components/Home/ValuableSpeech';
import Overview from '../../Components/Home/Overview';
import TrustedPartners from '../../Components/Others/TrustedPartners';

const Home = () => {
    return (
        <div className=''>
            <TopBanner />
            <PremiumService />
            <ValuableSpeech />
            <Overview />
            <TrustedPartners />
        </div>
    );
};

export default Home;