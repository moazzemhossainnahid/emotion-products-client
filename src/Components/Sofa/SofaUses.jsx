import React from 'react';
import { useTranslation } from 'react-i18next';

const SofaUses = () => {
    const {t} = useTranslation();

    return (
        <div className='bg-[#ffffff] py-7'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full mx-auto pt-10">
                <div data-aos="fade-down" data-aos-duration="1000" className="w-full md:w-2/6 mx-auto relative">
                    <img src="https://i.ibb.co/Lv8Qsn7/Whats-App-Image-2023-05-18-fdat-15-42-22.jpg" alt="" className="w-5/6 h-[60vh] relative border border-primary md:absolute md:left-5 md:-top-44 flex justify-center items-center mx-auto" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-4/6 mx-auto p-5">
                    <h3 className="text-2xl font-bold text-dark md:w-2/3">{`Key Features of our Carport ShadeSwift `}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
                        <div className="space-y-2">
                            {/* <div className="w-12 h-12 bg-[#22363C] p-2 rounded-full">
                                <img src="https://i.ibb.co/H2zMCLt/1518185.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div> */}
                            <h3 className="text-xl text-dark font-bold">Artistry in Every Detail</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t1')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Timeless Furnishings is a testament to meticulous craftsmanship. Each piece is a masterpiece crafted by skilled artisans, ensuring a level of artistry that goes beyond mere furniture – it's an expression of refined taste.</p>
                        </div>
                        <div className="space-y-2">
                            {/* <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/2ZqfbC8/25694.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div> */}
                            <h3 className="text-xl text-dark font-bold">Versatile Elegance for Every Setting</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t2')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">From urban lofts to cozy homes and contemporary offices, Timeless Furnishings effortlessly adapts to diverse environments. Our furniture collection brings forth a blend of style and versatility, enhancing the aesthetic appeal of any space.</p>

                        </div>
                        <div className="space-y-2">
                            {/* <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/f8LgLZ3/69840.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div> */}
                            <h3 className="text-xl text-dark font-bold">Luxurious Materials, Enduring Grace</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t3')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Immerse yourself in the luxury of Timeless Furnishings, featuring premium materials that speak of enduring grace. From rich wood finishes to sumptuous upholstery, our furniture stands as a symbol of timeless elegance.</p>
                        </div>
                        <div className="space-y-2">
                            {/* <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/3yRD2k5/4327360.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div> */}
                            <h3 className="text-xl text-dark font-bold">Harmonious Fusion of Style and Practicality</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t4')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Our collection prioritizes both aesthetics and functionality. Timeless Furnishings includes pieces with stylish storage solutions, seamlessly merging beauty with utility to create a harmonious environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SofaUses;