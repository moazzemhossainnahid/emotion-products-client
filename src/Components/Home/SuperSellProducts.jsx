import React from 'react';
import { SuperSellPData } from '../../assets/Data/SuperSellPData';
import { FaDatabase, FaHeart, FaShoppingCart, FaSignal } from 'react-icons/fa';

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
                                    <h3 className="absolute top-3 left-0 bg-white px-4 flex gap-3 cursor-pointer items-center py-2 text-black">{d?.tag}</h3>
                                    <div className="absolute bottom-3 left-0 flex justify-center w-full items-center gap-3">
                                        <img src="https://i.ibb.co/zVfJ5YR/Vector.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <img src="https://i.ibb.co/1Z7Z2n7/Vector-1.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <img src="https://i.ibb.co/kDMMj3Q/Vector-2.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                    </div>
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