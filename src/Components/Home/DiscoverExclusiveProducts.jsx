import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const DiscoverExclusiveProducts = () => {
    return (
        <div className='container w-full py-7'>
            <div className="w-full mx-auto bg-[url('https://i.ibb.co/Yb1FC84/Rectangle-174.png')] relative h-[80vh] bg-cover">
                <div className=" bg-white absolute bottom-7 p-10 left-7">
                    <h3 className="text-gray-600 text-2xl md:text-3xl">Discover Our <br /> Exclusive Prducts</h3>
                    <button className='flex gap-2 items-center pt-5'>Discover More <FaArrowRight className='text-md'/></button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverExclusiveProducts;