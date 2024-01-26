import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OurExclusiveProduct = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <div className='container w-full'>
            <div className="w-full md:w-4/5 mx-auto p-3 py-7">
                <h3 className="text-2xl md:text3xl capitalize font-semibold">{t('homeExclusiveProduct.lfttitle')}</h3>
                <div className="py-7">
                    <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-7 items-center w-full gap-5">
                        <div className="w-full md:w-3/6 mx-auto relative">
                            <div className="relative w-full mx-auto">
                                <div className="relative w-full md:w-5/6">
                                    <img src="https://i.ibb.co/crm560K/Screenshot-9.png" alt="" className="relative w-full" />
                                    <img src="https://i.ibb.co/2y9GMFZ/Untitled-design-removebg-preview.png" alt="" className="absolute -top-7 -rotate-[35deg] -left-8 w-28" />
                                    </div>
                                <div className="absolute bottom-7 bg-gray-200 left-0 flex justify-center px-7 py-2 border-r-4 border-primary items-center gap-3">
                                    <div className="">
                                        <img src="https://i.ibb.co/1Z7Z2n7/Vector-1.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <h5 className="text-sm">{t('homeExclusiveProduct.ex')}</h5>
                                    </div>
                                    <div className="">
                                        <img src="https://i.ibb.co/3WWwvLx/Vector-3.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <h5 className="text-sm">{t('homeExclusiveProduct.cm')}</h5>
                                    </div>
                                    <div className="">
                                        <img src="https://i.ibb.co/zNbKh1m/Vector-4.png" alt="" className="bg-gray-200 rounded-full h-8 w-8 p-2 text-3xl cursor-pointer hover:scale-110 duration-300" />
                                        <h5 className="text-sm">{t('homeExclusiveProduct.at')}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                            <h3 className="text-xl font-semibold text-gray-700 pt-1">{t('homeExclusiveProduct.title')} </h3>
                            <div className="pt-2 space-y-3">
                                <p className="text-sm">{t('homeExclusiveProduct.desc1')}</p>
                                <p className="text-sm">{t('homeExclusiveProduct.desc2')} </p>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">{t('homeExclusiveProduct.p1')}</h5>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">{t('homeExclusiveProduct.p2')}</h5>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">{t('homeExclusiveProduct.p3')}</h5>
                            </div>
                            <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">{t('homeExclusiveProduct.p4')}</h5>
                            </div>
                            {/* <div className="flex pb-2 items-center gap-3">
                                <img src="https://i.ibb.co/v4h4JWW/Vector-5.png" alt="" className="w-5 h-5" />
                                <h5 className="text-sm">It is a long established fact that a reader</h5>
                            </div> */}
                            <div className="pt-2 gap-5 flex justify-start items-center">
                                <button onClick={() => navigate("/productdetails/massagechair/ms-131plus")} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">{t('homeExclusiveProduct.viewD')} </button>
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