import React from 'react';

const MChairTopBanner = () => {
    return (
        <div className="container bg-gradient-to-l from-[#2989A8] to-[#0395B5] px-7 mx-auto w-full text-white">
            <div className='flex flex-col md:flex-row justify-between gap-3 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 className='text-center text-2xl sm:text-5xl sm:text-left'>Luxury relaxation</h2>
                    <p className='text-center text-sm sm:text-left pt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button className="bg-primary flex justify-center w-1/3 mx-auto md:mx-0 mt-5 px-7 py-2 rounded">Buy Now</button>
                </div>
                <div className='w-full md:w-3/6 relative overflow-hidden mx-auto'>

                    <div className='mx-auto hidden md:block bg-[#0BA0CF] z-10 absolute -bottom-28 left-28 rounded-full w-96 h-96'></div>
                    <img className='w-3/5 p-5 mx-auto z-20 relative' src="https://www.pngkey.com/png/full/250-2507384_supply-best-massage-chair-treadmill-in-the-world.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MChairTopBanner;