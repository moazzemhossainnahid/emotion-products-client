import React from 'react';
import { SuperSellPData } from '../../assets/Data/SuperSellPData';

const SuperSellProducts = () => {
    return (
        <div className='container w-full bg-[#e1e0e0]'>
            <div className="w-full md:w-4/5 mx-auto p-3 py-7">
                <h3 className="text-2xl md:text3xl capitalize font-semibold">super sale products</h3>
                <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        SuperSellPData?.map(d => (
                            <div key={d?.id} className="w-full mx-auto text-center flex flex-col justify-center">
                                <div className="relative w-full mx-auto">
                                    <img src={d?.img} alt="" className="relative w-full" />
                                    <h3 className="absolute top-3 left-0 bg-white px-4 flex gap-2 cursor-pointer items-center py-2 text-black">{d?.tag}</h3>
                                </div>
                                <h3 className="text-xl pt-3 font-semibold text-center">{d?.title}</h3>
                                <h3 className="text-md pt-2 font-semibold text-center"> <span className="line-through pr-3">$100</span> ${d?.price}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SuperSellProducts;