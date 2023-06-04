import React from 'react';
import HomeTopBannerCarousel from '../../Components/Home/HomeTopBannerCarousel';
import CompleteCollection from '../../Components/Home/CompleteCollection';
import ValuableSpeech from '../../Components/Home/ValuableSpeech';
import OurExclusiveProduct from '../../Components/Home/OurExclusiveProduct';
import SuperSellProducts from '../../Components/Home/SuperSellProducts';
import DiscoverExclusiveProducts from '../../Components/Home/DiscoverExclusiveProducts';
import SuccessStories from '../../Components/CarPort/SuccessStories';

const Home = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <HomeTopBannerCarousel/>
            <CompleteCollection/>
            <ValuableSpeech/>
            <SuperSellProducts/>
            <OurExclusiveProduct/>
            <DiscoverExclusiveProducts/>
            <SuccessStories/>
        </div>
    );
};

export default Home;