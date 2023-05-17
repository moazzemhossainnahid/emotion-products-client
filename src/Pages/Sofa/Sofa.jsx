import React from 'react';
import SofaTopBanner from '../../Components/Sofa/SofaTopBanner';
import SofaPremiumService from '../../Components/Sofa/SofaPremiumService';
import SofaValuableSpeech from '../../Components/Sofa/SofaValuableSpeech';
import SofaOverview from '../../Components/Sofa/SofaOverview';
import SofaExclusivePackages from '../../Components/Sofa/SofaExclusivePackages';
import SofaVideos from '../../Components/Sofa/SofaVideos';
import SofaSuccessStories from '../../Components/Sofa/SofaSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';

const Sofa = () => {
    return (
        <div className=''>
            <SofaTopBanner />
            <SofaPremiumService />
            <SofaValuableSpeech />
            <SofaOverview />
            <SofaExclusivePackages />
            <SofaVideos />
            <SofaSuccessStories />
            <TrustedPartners />
        </div>
    );
};

export default Sofa;