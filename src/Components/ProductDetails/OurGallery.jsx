import React, { useState } from 'react';
import FsLightbox from "fslightbox-react";
import { FaAngleRight } from 'react-icons/fa';

const OurGallery = () => {
    const [toggler, setToggler] = useState(false);

    const data = [
        "https://i.ibb.co/Fz1K8xd/Group-1.jpg",
        "https://i.ibb.co/tcJ8RN4/Group-2.jpg",
        "https://i.ibb.co/Kxv1Dzt/Group-3.jpg",
        "https://i.ibb.co/5G4pyNS/Group-4.jpg",
        "https://i.ibb.co/KqQzvX3/Group-5.jpg",
        "https://i.ibb.co/WcKyS8s/Group-6.jpg",
        "https://i.ibb.co/m0qrfqv/Group-7.jpg",
        "https://i.ibb.co/2yPQXzM/Group-8.jpg",
        "https://i.ibb.co/BP9X2S3/Group-9.jpg",
        "https://i.ibb.co/MR31Jyx/Group-10.jpg",
        "https://i.ibb.co/XCZfCbg/Group-11.jpg",
        "https://i.ibb.co/mBfNh0n/Group-12.jpg",
        "https://i.ibb.co/3sjJVFq/Group-14.jpg",
        "https://i.ibb.co/8YZCT9g/Group-19.jpg",
        "https://i.ibb.co/0CHCN7b/Group-21.jpg",
        "https://i.ibb.co/3cTLbhM/Group-25.jpg",
        "https://i.ibb.co/HnG47RN/Group-26.jpg",
        "https://i.ibb.co/yy5V0Ww/Group-27.jpg",
        "https://i.ibb.co/yYYXvyK/Group-28.jpg",
        "https://i.ibb.co/Ld7T3H3/Group-29.jpg",
        "https://i.ibb.co/CmfhG6k/Group-30.jpg",
        "https://i.ibb.co/KsDyNbX/Group-31.jpg",
        "https://i.ibb.co/xhZKWvY/Group-32.jpg",
        "https://i.ibb.co/SBbrqK6/Group-33.jpg",
        "https://i.ibb.co/QPJZ1b0/Group-34.jpg",
        "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    ];

    return (
        <div className='w-full'>

            <div className="bg-gradient-to-r from-[#4C0144] to-[#0E000D] w-full">
                <div className="flex flex-col md:flex-row gap-5 relative justify-around items-center py-20 px-5 md:px-20">
                    <div className="absolute top-0 left-0 w-40 h-52 bg-[#6E2967]"></div>
                    <div className="w-full md:w-3/5 relative">
                        <div className="w-5/6 mx-auto md:m-0 bg-gradient-to-r from-[#42003B] p-7 rounded-2xl relative">
                            <img src="https://i.ibb.co/Fz1K8xd/Group-1.jpg" alt="" className="w-full mx-auto h-96" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/5">
                        <h3 className="text-white text-3xl md:text-5xl font-semibold text-right pb-5 pr-7">Our Gallery</h3>
                        <h3 className="text-white font-semibold pb-5">This is Our Gallery, Check it Out !</h3>
                        <div className="w-full grid grid-cols-3 gap-5 mx-auto pb-7">
                            {
                                data?.slice(1, 7).map(img => (
                                    <div className="w-full mx-auto">
                                        <img src={img} alt="image" className="w-32 mx-auto" />
                                    </div>
                                ))
                            }
                        </div>
                        <div onClick={() => setToggler(!toggler)} className="w-full flex justify-end absolute right-0 bottom-10 pt-10">
                            <button className="flex w-32 py-2 group items-center justify-start pl-5 text-white bg-gray-600 rounded-l-3xl">View All <FaAngleRight className='text-2xl text-white group-hover:translate-x-3 duration-200 ease-in-out' /></button>
                        </div>
                    </div>
                </div>

            </div>

            <FsLightbox
                toggler={toggler}
                sources={data}
            />
        </div>
    );
};

export default OurGallery;