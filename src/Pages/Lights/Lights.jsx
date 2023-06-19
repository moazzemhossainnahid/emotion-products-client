import React from 'react';
import LightsTopBanner from '../../Components/Lights/LightsTopBanner';
import LightsPremiumService from '../../Components/Lights/LightsPremiumService';
import LightsValuableSpeech from '../../Components/Lights/LightsValuableSpeech';
import LightsOverview from '../../Components/Lights/LightsOverview';
import LightsExclusivePackages from '../../Components/Lights/LightsExclusivePackages';
import LightsVideos from '../../Components/Lights/LightsVideos';
import LightsSuccessStories from '../../Components/Lights/LightsSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import LightsTopBannerCarousel from '../../Components/Lights/LightsTopBannerCarousel';
import LightsBestMeterials from '../../Components/Lights/LightsBestMeterials';

const Lights = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <LightsTopBanner />
            <LightsPremiumService />
            <LightsBestMeterials />
            <LightsOverview />
            <LightsExclusivePackages />
            <LightsVideos />
            {/* <LightsSuccessStories /> */}
            {/* <TrustedPartners /> */}
        </div>
    );
};

export default Lights;