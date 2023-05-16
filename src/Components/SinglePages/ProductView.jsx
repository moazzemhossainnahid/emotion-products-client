import React from 'react';
import CarouselSlider from '../Others/CarouselSlide/CarouselSlider';
import { ImArrowLeft } from 'react-icons/im';
import { FaFacebook, FaFacebookF, FaInstagram, FaRegHeart, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import {
    AiOutlineHome,
    AiOutlineRight, AiOutlineShoppingCart
} from 'react-icons/ai';
const ProductView = () => {
    const [Image, setImage] = React.useState("first");

    const shoes1 = "https://i.ibb.co/DCf6RQn/DSC03614-1.png";
    const shoes2 = "https://i.ibb.co/ngckL8y/Rectangle-160.png";
    const shoes3 = "https://i.ibb.co/JpNfxSh/Rectangle-158.png";
    const shoes4 = "https://i.ibb.co/CMg3hRt/Rectangle-151.png";

    return (
        <div className='p-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-100">
                    {Image === "first" && <img src={shoes1} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "second" && <img src={shoes2} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "third" && <img src={shoes3} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "forth" && <img src={shoes4} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}

                    <CarouselSlider setImage={setImage}></CarouselSlider>
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl font-semibold mt-1">Exclusive Massage Chair</h2>
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <div className="flex space-x-3">
                            <p className="line-through">$5000.00 </p>
                            <p className="text-2xl text-primary font-bold -mt-1.5">$4500.00 </p>
                        </div>
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="space-y-5 mb-5">
                        <div className=''>
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Deserunt aliquid est molestias exercitationem laboriosam, totam
                                excepturi sunt eaque dolorum, repudiandae distinctio vitae nam
                                quisquam quasi.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="h-8 w-8 border border-gray-400 flex justify-center items-center hover:bg-gray-200  rounded"><FaFacebook /></span>
                            <span className="h-8 w-8 border border-gray-400 flex justify-center items-center hover:bg-gray-200  rounded"><FaTwitter /></span>
                            <span className="h-8 w-8 border border-gray-400 flex justify-center items-center hover:bg-gray-200 rounded"><FaInstagram /></span>
                            <span className="h-8 w-8 border border-gray-400 flex justify-center items-center hover:bg-gray-200 rounded"><FaWhatsapp /></span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-col space-y-3">
                                <p className="font-bold">Available Color </p>
                                <div className="flex gap-3">
                                <button className="pl-5 w-7 h-7 rounded-full bg-black border-2 border-primary focus:border-black font-medium"></button>
                                <button className="pl-5 w-7 h-7 rounded-full bg-white border-2 border-primary focus:border-black font-medium"></button>
                                <button className="pl-5 w-7 h-7 rounded-full bg-[#EE8539] border-2 border-primary focus:border-black font-medium"></button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h3 className="text-xl font-medium uppercase text-gray-800 ">Size</h3>
                                <div className="flex items-center gap-2 pt-3">
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-xs" />
                                        <label htmlFor="size-xs" className="text-xs border rounded-full border-primary h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-s" />
                                        <label htmlFor="size-s" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">S</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-m" />
                                        <label htmlFor="size-m" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">M</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-L" />
                                        <label htmlFor="size-L" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">L</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-xl" />
                                        <label htmlFor="size-xl" className="text-xs border  h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">XL</label>
                                    </div>

                                </div>
                            </div>
                            <div className="pt-2">
                                <span className="font-medium">Quantity</span>
                                <div class="flex gap-2 p-2 border rounded w-32 justify-center items-center">
                                    <span className="border-gray-700 cursor-pointer rounded-full w-7 h-7 border px-2 flex justify-center items-center">
                                        <i class="fa-solid fa-minus"></i>
                                    </span>
                                    <input
                                        class="px-2 font-bold bg-transparent text-center w-8 max-h-8"
                                        type="text"
                                        value="1"
                                    />
                                    <span className="border-gray-700 bg-primary cursor-pointer rounded-full w-7 h-7 border px-2 flex justify-center items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <button className="border flex items-center border-gray-400 px-4 py-2 rounded-md bg-primary hover:bg-transparent hover:text-primary font-medium text-black mr-4"> <span className="mr-3">ADD TO CART</span><AiOutlineShoppingCart /></button>
                                <button className="border flex items-center border-gray-400 px-8 py-2 bg-transparent rounded-md text-black hover:bg-primary hover:text-white font-medium mr-4"> <span className="ml-3">Shop Now</span></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;