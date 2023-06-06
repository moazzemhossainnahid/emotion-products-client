import React from 'react';
import SofaTopBanner from '../../Components/Sofa/SofaTopBanner';
import SofaPremiumService from '../../Components/Sofa/SofaPremiumService';
import SofaValuableSpeech from '../../Components/Sofa/SofaValuableSpeech';
import SofaOverview from '../../Components/Sofa/SofaOverview';
import SofaExclusivePackages from '../../Components/Sofa/SofaExclusivePackages';
import SofaVideos from '../../Components/Sofa/SofaVideos';
import SofaSuccessStories from '../../Components/Sofa/SofaSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import SofaTopBannerCarousel from '../../Components/Sofa/SofaTopBannerCarousel';
import LuxuryRelaxation from '../../Components/Sofa/LuxuryRelaxation';
import SofaBestMeterials from '../../Components/Sofa/SofaBestMeterials';

const Sofa = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <LuxuryRelaxation />
            <SofaPremiumService />
            <SofaBestMeterials />
            <SofaOverview />
            <SofaExclusivePackages />
            <SofaVideos />
            <SofaSuccessStories />
            <TrustedPartners />
        </div>
    );
};

export default Sofa;