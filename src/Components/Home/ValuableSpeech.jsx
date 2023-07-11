import React from 'react';

const ValuableSpeech = () => {
    return (
        <div className='bg-white py-10'>
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row p-5 justify-between items-center gap-5">
                <div className="w-full md:w-2/5 mx-auto">
                    <img src="https://i.ibb.co/Lpgw2R8/Rectangle-6.png" alt="" className="" />
                </div>
                <div className="w-full md:w-3/5 mx-auto md:pl-7">
                    <h3 className="text-2xl font-bold">Valuable Speech From Our <br /> CEO & Founder</h3>
                    <div className="flex items-center pt-3">
                        <p className="h-1 bg-[#00C2FF] w-32"></p>
                        <p className="border-b border-[#00C2FF] w-20"></p>
                    </div>

                    <div className="space-y-5 w-4/5 pt-3">
                        <p className="">Hello fellas! </p>
                        <p className="">Welcome to our world of comfort and luxury. We're thrilled to offer you a line of beautiful and functional products. My passion for cars and luxury furniture turned into my profession and led me to lay the foundation of this company where you find everything you need to unwind and recharge, from the carport to lighting and luxury furniture to massage chairs. <br /> As the CEO of this company, I believe that luxury is not something related to the price tag but about the experience. That's where our products and services come that reflect my years of experience and dedication to excellence.</p>
                        <p className="">Our designer, a professional degree holder, ensures that every product is designed with utmost care and detail. </p>
                        <p className="">Let's embark on a journey to transform your space into a sanctuary of comfort and relaxation.</p>
                    </div>
                    <p className="py-2">Sincerely, </p>
                    <h3 className="text-md text-gray-500 italic">Edwin Eijsink & Timon Eijsink</h3>
                    {/* <h3 className="text-md text-gray-500 italic"> & </h3>
                    <h3 className="text-md text-gray-500 italic">Timon Eijsink</h3> */}
                </div>
            </div>
        </div>
    );
};

export default ValuableSpeech;