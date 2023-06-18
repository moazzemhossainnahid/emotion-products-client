import React from 'react';
import HomeTopBannerCarousel from '../../Components/Home/HomeTopBannerCarousel';
import CompleteCollection from '../../Components/Home/CompleteCollection';
import ValuableSpeech from '../../Components/Home/ValuableSpeech';
import OurExclusiveProduct from '../../Components/Home/OurExclusiveProduct';
import SuperSellProducts from '../../Components/Home/SuperSellProducts';
import DiscoverExclusiveProducts from '../../Components/Home/DiscoverExclusiveProducts';
import SuccessStories from '../../Components/CarPort/SuccessStories';
import LuxuryCollection from '../../Components/Home/LuxuryCollection';
import OurWorkingProcess from '../../Components/Home/OurWorkingProcess';

const Home = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <HomeTopBannerCarousel/>
            <ValuableSpeech/>
            <CompleteCollection/>
            <LuxuryCollection/>
            {/* <SuperSellProducts/> */}
            <OurExclusiveProduct/>
            <DiscoverExclusiveProducts/>
            {/* <SuccessStories/> */}
            <OurWorkingProcess/>
        </div>
    );
};

export default Home;