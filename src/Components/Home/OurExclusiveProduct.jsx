import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OurExclusiveProduct = () => {
    const navigate = useNavigate();
    return (
        <div className='container w-full'>
            <div className="w-full md:w-4/5 mx-auto p-3 py-7">
                <h3 className="text-2xl md:text3xl capitalize font-semibold">Our exclusive Product</h3>
                <div className="py-7">
                    <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-7 items-center w-full gap-5">
                        <div className="w-full md:w-3/6 mx-auto relative">
                            <div className="relative w-full mx-auto">
                                <img src="https://i.ibb.co/crm560K/Screenshot-9.png" alt="" className="relative w-full md:w-5/6" />
                                <div className="absolute bottom-7 bg-gray-200 left-0 flex justify-center px-7 py-2 border-r-4 border-primary items-center gap-3">
                                    <div className="">
                                        <img src="https://i.ibb.co/1Z7Z2n7/Vector-1.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <h5 className="text-sm">Exclusive</h5>
                                    </div>
                                    <div className="">
                                        <img src="https://i.ibb.co/3WWwvLx/Vector-3.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <h5 className="text-sm">Comfort</h5>
                                    </div>
                                    <div className="">
                                        <img src="https://i.ibb.co/zNbKh1m/Vector-4.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <h5 className="text-sm">Automatic</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                            <h3 className="text-xl font-semibold text-gray-700 pt-1">Relax and recharge yourself with our massage chairs </h3>
                            <div className="pt-2 space-y-3">
                                <p className="text-sm">Looking for a chair that gives you a full-body massage and melts all your worries away? Our massage chairs are for you. They offer you the ultimate relaxation and unwinding like never before. Since our state-of-the-art chairs are designed with your comfort in mind, you can soothe your tired feet or relieve tension in your shoulder or neck with our massage chairs.</p>
                                <p className="text-sm">With a range of massage techniques, they offer a truly therapeutic experience and allow you to customize your message to target specific body regions. Moreover, you can set the chair in any comfortable position. We are dedicated to offering premium quality, sturdy, durable massage chairs. </p>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">It is a long established fact that a reader</h5>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">a long established fact that a reader will be distracted</h5>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">established fact that a reader will be distracted</h5>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">fact that a reader will be distracted by the</h5>
                            </div>
                            {/* <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">It is a long established fact that a reader</h5>
                            </div> */}
                            <div className="pt-2 gap-5 flex justify-start items-center">
                                <button onClick={() => navigate("/productdetails/1")} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">View Details </button>
                                {/* <button className="px-7 py-2 rounded font-semibold flex bg-primary items-center border-2 hover:bg-white group">BUY NOW <FaArrowRight className='pl-2 text-2xl' /> </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExclusiveProduct;