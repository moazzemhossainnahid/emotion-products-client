import React from 'react';
import MChairTopBanner from '../../Components/MassageChair/MChairTopBanner';
import MChairPremiumService from '../../Components/MassageChair/MChairPremiumService';
import MChairValuableSpeech from '../../Components/MassageChair/MChairValuableSpeech';
import MChairOverview from '../../Components/MassageChair/MChairOverview';
import LightsExclusivePackages from '../../Components/Lights/LightsExclusivePackages';
import MChairVideos from '../../Components/MassageChair/MChairVideos';
import MChairSuccessStories from '../../Components/MassageChair/MChairSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import MChairTopBannerCarousel from '../../Components/MassageChair/MChairTopBannerCarousel';

const MassageChair = () => {
    return (
        <div className=''>
            <MChairTopBannerCarousel />
            <MChairPremiumService />
            <MChairValuableSpeech />
            <MChairOverview />
            <LightsExclusivePackages />
            <MChairVideos />
            <MChairSuccessStories />
            <TrustedPartners />
        </div>
    );
};

export default MassageChair;