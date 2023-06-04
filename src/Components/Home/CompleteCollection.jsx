import React from 'react';
import { CompleteCollectionData } from '../../assets/Data/CompleteCollectionData';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CompleteCollection = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full py-20 text-center p-5'>
            <h3 className="text-2xl md:text-3xl">Our Complete Collection With Luxury</h3>
            <p className="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page</p>

            <div className="w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-3 p-3 py-10">
                {
                    CompleteCollectionData?.map(d => (
                        <div key={d?.id} className="w-full mx-auto flex flex-col justify-center">
                            <div className="relative w-full mx-auto">
                                <img src={d?.img} alt="" className="relative w-full" />
                                <h3 onClick={() => navigate(d?.href)} className="absolute bottom-5 left-5 bg-white px-7 flex gap-2 cursor-pointer items-center py-2 text-black">Explore Now <FaArrowRight/></h3>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-left">{d?.title}</h3>
                            <div className="flex gap-2">
                                <FaStar className='text-orange-600 text-md'/>
                                <FaStar className='text-orange-600 text-md'/>
                                <FaStar className='text-orange-600 text-md'/>
                                <FaStar className='text-orange-600 text-md'/>
                                <FaStar className='text-orange-600 text-md'/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CompleteCollection;