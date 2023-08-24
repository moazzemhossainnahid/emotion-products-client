import React from 'react';
import MChairTopBanner from '../../Components/MassageChair/MChairTopBanner';
import MChairPremiumService from '../../Components/MassageChair/MChairPremiumService';
import MChairValuableSpeech from '../../Components/MassageChair/MChairValuableSpeech';
import MChairOverview from '../../Components/MassageChair/MChairOverview';
import MChairVideos from '../../Components/MassageChair/MChairVideos';
import MChairSuccessStories from '../../Components/MassageChair/MChairSuccessStories';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import MChairTopBannerCarousel from '../../Components/MassageChair/MChairTopBannerCarousel';
import MChairExclusivePackages from '../../Components/MassageChair/MChairExclusivePackages';
import MChairBestMeterials from '../../Components/MassageChair/MChairBestMeterials';
import MChairUses from '../../Components/MassageChair/MChairUses';

const MassageChair = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <MChairTopBanner />
            <MChairPremiumService />
            <MChairBestMeterials />
            <MChairUses/>
            <MChairExclusivePackages />
            {/* <MChairOverview /> */}
            <MChairVideos />
            {/* <MChairSuccessStories /> */}
            {/* <TrustedPartners /> */}
        </div>
    );
};

export default MassageChair;