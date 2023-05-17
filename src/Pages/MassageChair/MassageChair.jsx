import React from 'react';
import MChairTopBanner from '../../Components/MassageChair/MChairTopBanner';
import MChairPremiumService from '../../Components/MassageChair/MChairPremiumService';
import MChairValuableSpeech from '../../Components/MassageChair/MChairValuableSpeech';
import MChairOverview from '../../Components/MassageChair/MChairOverview';
import MChairExclusivePackages from '../../Components/Lights/LightsExclusivePackages';
import MChairVideos from '../../Components/MassageChair/MChairVideos';
import MChairSuccessStories from '../../Components/MassageChair/MChairSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';

const MassageChair = () => {
    return (
        <div className=''>
            <MChairTopBanner />
            <MChairPremiumService />
            <MChairValuableSpeech />
            <MChairOverview />
            <MChairExclusivePackages />
            <MChairVideos />
            <MChairSuccessStories />
            <TrustedPartners />
        </div>
    );
};

export default MassageChair;