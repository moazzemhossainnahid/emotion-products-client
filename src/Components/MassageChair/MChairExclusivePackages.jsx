import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UseMChair from '../../Hooks/useMChair';

const MChairExclusivePackages = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [chairs]=UseMChair();


    const mchair = [
        {
            id: "ms-131plus",
            project: "Project 01",
            mainTtl: "Take the first step to a more comfortable life, and order your massage chair right now!",
            mainDesc: "It's time to make the best investment for yourself with this massage chair. You can contact us today and order the massage chair to get the best experience without denting your wallet!",
            title: "MS-131 PLUS Massage Chair",
            item: "Item no 117195",
            itemDesc: "MS-131 PLUS Massage Chair | Touch Screen",
            cmin: "CM | INCH",
            cminDesc: "1460×846×1245 mm",
            shortDesc: "Tastefully blending contemporary design with a touch of industrial flair, the Monticello Lantern is an updated classic.",
            price: 6000,
            images: {
                banner: "https://i.ibb.co/7W82RbK/Screenshot-12.png",
                showcase: [
                    "https://i.ibb.co/8b1XWNQ/DSC03611.jpg",
                    "https://i.ibb.co/0M2WPDm/DSC03635.jpg",
                    "https://i.ibb.co/FDtBZ8H/DSC03640.jpg",
                    "https://i.ibb.co/BrrN1wd/DSC03643.jpg",
                ]
            },
            checkers: [
                "2 YEARS WARRANTY",
                "INNOVATIVE DESIGN",
                "WORLDWIDE SHIPMENT",
                "PERSONAL ADVICE IN OUR SHOWROOM",

            ],
            descriptions: {
                desc1: "Have you been waiting for the day when you get the ultimate relaxation after a long tiring day of work? With MS-131 PLUS Massage Chair, we have got you covered! It helps relax your tensed muscles and reduce fatigue.",
                desc2: "This massage chair is packed with tons of advanced features. It comes with an adjustable footrest and leg rest that allows you to be in a relaxing position. Designed with high-quality materials and entails the latest technology to offer you optimal comfort. You can listen to your favorite music or podcasts while being in a perfect position of relaxation. It offers a perfect combo of comfort and design.",
                desc3: "Featuring a touchscreen remote control that makes everything intuitive and simple. You can choose any massage mode, connect smartphones via Bluetooth and access all functions with just a single touch.",
            },
            specifications: [
                { key: "Airbag", value: "Yes" },
                { key: "Footrest", value: "Yes" },
                { key: "Remote control", value: "Yes" },
                { key: "Bluetooth speakers", value: "Touch screen" },
                { key: "Weight massage chair", value: "Main Body: N.W.: 128 Kg, G.W.: 146 K" },
                { key: "Foot", value: "N.W.: 25 Kg, G.W.: 28 Kg" },
                { key: "Dimensions (L×H×W)", value: "1460×846×1245 mm" },
                { key: "Power Supply and wattage", value: "110-240V~ and 200 W" },
            ]


        }
    ]

    return (
        <div className='w-full md:w-5/6 mx-auto bg-white py-10 p-5'>
            <div className="w-full">
                <h3 className="text-2xl font-semibold">{t('mchair.exclusivePackages.title')}</h3>
                <div className="flex items-center pt-3">
                    <p className="h-1 bg-[#00C2FF] w-32"></p>
                    <p className="border-b border-[#00C2FF] w-20"></p>
                </div>
            </div>

            <section className="w-full pt-10">
                {
                    chairs && chairs?.map(c => (
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-7 items-center w-full gap-5">
                            <div className="w-full md:w-3/6 mx-auto relative">
                                <img src={c?.images?.banner} alt="" className="relative border border-primary shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-fill z-10" />
                                <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -left-20 -bottom-20" />
                            </div>
                            <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                                <h5 className="text-md text-gray-400">{c?.project}</h5>
                                <h3 className="text-xl font-semibold text-gray-700 pt-1">{c?.mainTtl}</h3>
                                <div className="pt-5 space-y-3">
                                    <p className="">{c?.mainDesc}</p>
                                </div>
                                <div className="pt-2">
                                    <button onClick={() => navigate(`/productdetails/massagechair/${c?.id}`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">{t('mchair.exclusivePackages.prd1.btn')} <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-7 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/7W82RbK/Screenshot-12.png" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-fill z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -left-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 01</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">{t('mchair.exclusivePackages.prd1.title')}</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">{t('mchair.exclusivePackages.prd1.desc')}</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/massagechair/ms-131plus`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">{t('mchair.exclusivePackages.prd1.btn')} <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                        </div>
                    </div>
                </div> */}

                {/* <div data-aos="fade-up" data-aos-duration="1000" className="pt-20 pb-7 hidden md:block">
                    <p className="border-b border-[#00C2FF] w-full"></p>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col md:flex-row-reverse justify-between py-10 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/VwdWZLL/ch4.jpg" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -right-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 02</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/1`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300'/></button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="pt-20 pb-7 hidden md:block">
                    <p className="border-b border-[#00C2FF] w-full"></p>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-10 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/7YsdQnf/ch2.jpg" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -left-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 03</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/1`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300'/></button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="pt-20 pb-7 hidden md:block">
                    <p className="border-b border-[#00C2FF] w-full"></p>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col md:flex-row-reverse justify-between py-10 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/X8H4jLP/ch1.jpg" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -right-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 04</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/1`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300'/></button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="p-5">
                    <button className='bg-[#00C2FF] hover:bg-[#3fabcc] btn text-gray-700 border-0 px-5 py-2 rounded-md'>View More Work</button>
                </div> */}
            </section>

        </div>
    );
};

export default MChairExclusivePackages;