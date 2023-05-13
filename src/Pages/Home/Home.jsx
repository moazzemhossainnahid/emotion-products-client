import React from 'react';
import TopBanner from '../../Components/Home/TopBanner';
import PremiumService from '../../Components/Home/PremiumService';
import ValuableSpeech from '../../Components/Home/ValuableSpeech';

const Home = () => {
    return (
        <div className=''>
            <TopBanner />
            <PremiumService />
            <ValuableSpeech/>
        </div>
    );
};

export default Home;