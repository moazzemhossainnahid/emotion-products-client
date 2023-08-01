import React from 'react';

const CarportBestMeterials = () => {
    return (
        <div className='w-full py-20'>
            <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
                <div className="w-full md:w-3/5 mx-auto p-3">
                    <h3 className="text-2xl md:text-3xl font-semibold capitalize">we provide you the best <br /> material and quality Products</h3>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-center">
                        <div className="">
                            <h3 className="text-xl font-semibold">Quality</h3>
                            <p className="text-sm">It is a long established fact that a reader will be distracted by the readable. It is a long hed fact that a reader will be distracted by the readable. It is a long established fact  a reader will be distracted by the readable</p>
                        </div>
                        <div className="">
                            <h3 className="text-xl font-semibold">Material</h3>
                            <p className="text-sm">It is a long established fact that a reader will be distracted by the readable. It is a long hed fact that a reader will be distracted by the readable. It is a long established fact  a reader will be distracted by the readable</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex justify-center mx-auto">
                    <img src="https://i.ibb.co/RjCm5S8/Rectangle-187.png" alt="" className="p-5" />
                </div>
            </div>
        </div>
    );
};

export default CarportBestMeterials;