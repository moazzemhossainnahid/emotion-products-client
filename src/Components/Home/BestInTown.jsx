import React from 'react';

const BestInTown = () => {
    return (
        <div className='w-full'>
            <div className="bg-[#03394A] pt-10 ">
                <div className="w-4/5 h-full md:h-72 mx-auto overflow-hidden">
                    <img src="https://i.ibb.co/Fh0ptGw/Rectangle-192.png" alt="" className="object-cover" />
                </div>
            </div>
            <div className="bg-[#FDFDFD] pb-10 w-full overflow-hidden">
                <div className="w-4/5 px-10 mx-auto p-5 shadow bg-white">
                    <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 text-gray-700 ">We Are Best In  The Town</h3>
                    <p className="py-5 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
                    <p className="py-5 text-sm">embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                </div>
            </div>
        </div>
    );
};

export default BestInTown;