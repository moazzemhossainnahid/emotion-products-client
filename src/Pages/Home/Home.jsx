import React from 'react';
import TopBanner from '../../Components/Home/TopBanner';
import PremiumService from '../../Components/Home/PremiumService';
import ValuableSpeech from '../../Components/Home/ValuableSpeech';
import Overview from '../../Components/Home/Overview';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import ExclusivePackages from '../../Components/Home/ExclusivePackages';

const Home = () => {
    return (
        <div className=''>
            <TopBanner />
            <PremiumService />
            <ValuableSpeech />
            <Overview />
            <ExclusivePackages />
            <TrustedPartners />
        </div>
    );
};

export default Home;