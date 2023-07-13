import React from 'react';

const LuxuryCollection = () => {
    return (
        <div className='bg-[#03394A] py-20 relative px-5 w-full'>
            <img src="https://i.ibb.co/GnBBrqG/Arrow-11.png" alt="" className="absolute top-20 hidden md:block left-10 w-20" />
            <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-3/5 space-y-3">
                    <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 w-5/6 text-white ">Elevate your space with furniture that reflects your style</h3>
                    <p className="text-[#8F969C]">A quality piece of furniture reflects your personality, taste and the life you want to live. So, why not live in style and comfort with our range of sofas collections? You can find our passion for design and commitment to quality in our collection of pieces. From the sleek lines of modern sofas to warm tones of tables and statement pieces to all items, we have something for everyone.</p>
                    <p className="text-[#8F969C]">Since the right piece of furniture can bring life to your space, we curated a diverse collection to cater to the needs of our customers. Further, you don't have to worry about the furniture's material; we ensure top-notch materials and craftsmanship. Every detail is carefully focused, ensuring that it lasts for years, from the finest words to the plush cushions of our sofas.</p>
                    <p className="text-[#8F969C] font-bold">Don't settle for less! Discover our collection and get a perfect piece expressing your style. </p>
                </div>
                <div className="w-full md:w-2/5">
                    <img src="https://i.ibb.co/Fh0ptGw/Rectangle-192.png" alt="" className="w-full p-5 rounded-2xl mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default LuxuryCollection;