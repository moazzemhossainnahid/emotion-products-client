import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DiscoverExclusiveProducts = () => {
    const navigate = useNavigate();
    return (
        <div className=' w-full py-7'>
            <div className="w-full mx-auto bg-[url('https://i.ibb.co/Yb1FC84/Rectangle-174.png')] p-10 relative bg-cover">
                <div className=" bg-gradient-to-b from-[#fcfcfc69] to-[#e5e4e4c8] p-7 rounded w-full md:w-4/5 mx-auto">
                    <h3 className="text-gray-700 text-center font-bold text-2xl pb-7 md:text-3xl">Shine bright with our stunning lighting collection that illuminates your life</h3>
                    <div className="space-y-3">
                        <p className='text-sm'>Nothing better than lighting to create the ambience you desire. With a perfect lighting fixture, you can complement your space. We offer a wide range of chandeliers, lanterns and other lighting fixtures that express your style and are as unique as you are.</p>
                        <p className='text-sm'>Whether you are looking for a bohemian or an industrial style, our lighting fixtures are one of a kind. Further, our chandeliers will fit your style so that you can add drama to your dining area or a serene atmosphere to your bedroom.</p>
                        <p className='text-sm'>Our lanterns are equally special, with various shapes and sizes. We promise to deliver the highest quality material so you don't regret buying any item. We design every lighting fixture with sturdy material so it lasts for years to come.</p>
                        <p onClick={() => navigate("/lights")} className="text-sm font-bold cursor-pointer pt-5">Shop now and let us help you transform your home with our beautiful lighting.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverExclusiveProducts;