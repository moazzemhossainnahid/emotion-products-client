import React from 'react';
import { useNavigate } from 'react-router-dom';

const BestInTown = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full'>
            <div className="bg-[#03394A] pt-10 ">
                <div className="w-4/5 h-full md:h-96 mx-auto overflow-hidden">
                    <img src="https://i.ibb.co/TrnSTM8/Whats-App-Image-2023-0f5-14-at-19-06-13.jpg" alt="" className="h-full w-full rounded-t-3xl object-cover" />
                </div>
            </div>
            <div className="bg-[#FDFDFD] pb-10 w-full">
                <div className="w-4/5 px-10 mx-auto p-5 shadow bg-white">
                    <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 text-gray-700 ">Upgrade your vehicle's protection and experience peace of mind with our durable and high-quality carports </h3>
                    <div className="space-y-3">
                        <p className="py-1 text-sm">Forget checking the weather forecast and constantly worrying about protecting your car in harsh weather conditions. At Motion  Products, we offer durable and stylish carports that perfectly shield your vehicle from the elements. </p>
                        <p className="py-1 text-sm">Since your car is your valuable property and deserves the best protection, we ensure your cars get the ultimate protection from harsh weather conditions, sun damage, and strong winds and snow. Furthermore, our carports are constructed from the highest quality materials, ensuring they can withstand any atmospheric conditions and stay in top condition for years.</p>
                        <p className="py-1 text-sm">And that's not all! You can enhance the look of your property with our carports. No matter what design or color you want, you can choose the best that spruces up your space. From traditional to modern styles, we have a range of carports complimenting any architectural style. </p>
                        <p onClick={() => navigate("/carport")} className="pt-3 cursor-pointer font-bold text-sm">Offer your car the best protection. Contact us right away and get your carport now! </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BestInTown;