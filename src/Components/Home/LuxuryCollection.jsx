import React from 'react';

const LuxuryCollection = () => {
    return (
        <div className='bg-[#03394A] py-20 relative px-5 w-full'>
            <img src="https://i.ibb.co/GnBBrqG/Arrow-11.png" alt="" className="absolute top-20 hidden md:block left-10 w-20" />
            <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-3/5 space-y-3">
                    <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 w-5/6 text-white ">Our Complete Collection With Luxury</h3>
                    <p className="text-[#8F969C]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum</p>
                    <p className="text-[#8F969C]">looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>
                </div>
                <div className="w-full md:w-2/5">
                    <img src="https://i.ibb.co/brnp8WC/Screenshot-5.png" alt="" className="w-full p-5 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default LuxuryCollection;