import React from 'react';
import LightsTopBanner from '../../Components/Lights/LightsTopBanner';
import LightsPremiumService from '../../Components/Lights/LightsPremiumService';
import LightsValuableSpeech from '../../Components/Lights/LightsValuableSpeech';
import LightsOverview from '../../Components/Lights/LightsOverview';
import MChairExclusivePackages from '../../Components/Lights/LightsExclusivePackages';
import LightsVideos from '../../Components/Lights/LightsVideos';
import LightsSuccessStories from '../../Components/Lights/LightsSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';

const Lights = () => {
    return (
        <div className=''>
            <LightsTopBanner />
            <LightsPremiumService />
            <LightsValuableSpeech />
            <LightsOverview />
            <MChairExclusivePackages />
            <LightsVideos />
            <LightsSuccessStories />
            <TrustedPartners />
        </div>
    );
};

export default Lights;