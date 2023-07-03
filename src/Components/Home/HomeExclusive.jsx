import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomeExclusive = () => {
const navigate = useNavigate();
    return (
        <div className='w-full'>
            <div class='w-full flex flex-col bg-white md:flex-row items-center justify-between py-10 gap-5'>
                <div class="h-96 w-full rounded-xl relative group" >
                    <div class="z-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-primary/50 to-transparent bg-gradient-to-t inset-x-0 bottom-0 text-white flex items-end">
                        <div className='w-4/5 mx-auto'>
                            <div class="p-4 space-y-3 text-xl text-center group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                <div class="font-bold text-2xl md:text-3xl">Our Exclusive Carport</div>
                                <p class="opacity-90 text-sm text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                <button onClick={() => navigate("/carport")} className='btn btn-primary mx-auto flex items-center gap-2 rounded hover:btn-warning'>Discover More <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <img alt="" class="object-cover w-full h-full transition duration-300 ease-in-out" src="https://i.ibb.co/SmFRkTd/Rectangle-197.png" />
                </div>
                <div class="h-96 w-full rounded-xl relative group" >
                    <div class="z-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-primary/50 to-transparent bg-gradient-to-t inset-x-0 bottom-0 text-white flex items-end">
                        <div className='w-4/5 mx-auto'>
                            <div class="p-4 space-y-3 text-xl text-center group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                <div class="font-bold text-2xl md:text-3xl">Our Exclusive Furniture</div>
                                <p class="opacity-90 text-sm text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                <button onClick={() => navigate("/sofa")} className='btn btn-primary mx-auto flex items-center gap-2 rounded hover:btn-warning'>Discover More <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <img alt="" class="object-cover w-full h-full transition duration-300 ease-in-out" src="https://i.ibb.co/dfH6MFZ/Rectangle-198.png" />
                </div>
            </div>
        </div>
    );
};

export default HomeExclusive;