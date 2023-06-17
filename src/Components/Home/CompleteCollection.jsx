import React from 'react';
import { CompleteCollectionData } from '../../assets/Data/CompleteCollectionData';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CompleteCollection = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full py-20 text-center p-5'>
            <h3 className="text-2xl md:text-3xl">Our Complete Collection With Luxury</h3>
            <p className="text-sm pt-2">It is a long established fact that a reader will be distracted by the readable content of a page</p>

            <div className="w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 p-3 py-10">
                {
                    CompleteCollectionData?.map(d => (
                        <div key={d?.id} className="w-full mx-auto flex md:flex-col justify-center items-center">
                            <div className="relative w-full h-40 mx-auto">
                                <img src={d?.img} alt="" className="relative h-full w-2/3 md:w-full hover:scale-95 duration-300 ease-in-out" />
                            </div>
                            <h3 onClick={() => navigate(d?.href)} className="text-xl group cursor-pointer md:text-2xl capitalize font-extralight text-left pt-5 flex gap-2 items-center">{d?.title} <FaArrowRight className='text-xl group-hover:translate-x-3 duration-300 ease-in-out font-extralight '/> </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CompleteCollection;