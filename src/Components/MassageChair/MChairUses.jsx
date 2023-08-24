import React from 'react';

const MChairUses = () => {
    return (
        <div className='bg-[#ffffff] py-7'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full mx-auto pt-10">
                <div data-aos="fade-down" data-aos-duration="1000" className="w-full md:w-2/6  mx-auto relative">
                    <img src="https://i.ibb.co/qJm7dDg/Screenshot-8.png" alt="" className="w-5/6 absolute left-5 -top-44 flex justify-center mx-auto" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-4/6 mx-auto p-5">
                    <h3 className="text-2xl font-bold text-dark md:w-2/3">We make Sure that, to give you a premium service</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/ss8GzgH/Vector.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Office</h3>
                            <p className="text-gray-500 text-sm md:pr-10">That's where my carport comes in. It may not be the most glamorous thing in the world.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/kKSXVCt/Vector-1.png " alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Home</h3>
                            <p className="text-gray-500 text-sm md:pr-10">That's where my carport comes in. It may not be the most glamorous thing in the world.</p>

                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/92fkF9g/Vector-2.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Gym</h3>
                            <p className="text-gray-500 text-sm md:pr-10">That's where my carport comes in. It may not be the most glamorous thing in the world.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/fqS9XLf/Vector-3.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Airport</h3>
                            <p className="text-gray-500 text-sm md:pr-10">That's where my carport comes in. It may not be the most glamorous thing in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MChairUses;