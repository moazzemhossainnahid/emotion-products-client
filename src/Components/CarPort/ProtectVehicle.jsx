import React from 'react';

const ProtectVehicle = () => {
    return (
        <div className="container bg-gradient-to-l from-[#2989A8] to-[#0395B5] px-7 mx-auto w-full text-white">
            <div className='flex flex-col md:flex-row justify-between gap-3 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 className='text-center text-2xl sm:text-5xl sm:text-left'>Protect Your Vehicle</h2>
                    <p className='text-center text-sm sm:text-left pt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button className="bg-primary mt-5 px-7 py-2 rounded">Buy Now</button>
                </div>
                <div className='w-full md:w-3/6 mx-auto md:-mr-10'>
                    <img className='w-full object-cover' src="https://i.ibb.co/yPJ4BK8/Rectangle-184.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProtectVehicle;