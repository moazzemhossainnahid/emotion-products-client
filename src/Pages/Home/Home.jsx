import React from 'react';
import TopBanner from '../../Components/Home/TopBanner';
import PremiumService from '../../Components/Home/PremiumService';
import ValuableSpeech from '../../Components/Home/ValuableSpeech';
import Overview from '../../Components/Home/Overview';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import ExclusivePackages from '../../Components/Home/ExclusivePackages';
import SuccessStories from '../../Components/Home/SuccessStories';
import CarPortVideos from '../../Components/Home/CarPortVideos';

const Home = () => {
    return (
        <div className=''>
            <TopBanner />
            <PremiumService />
            <ValuableSpeech />
            <Overview />
            <ExclusivePackages />
            <CarPortVideos />
            <SuccessStories />
            <TrustedPartners />
        </div>
    );
};

export default Home;