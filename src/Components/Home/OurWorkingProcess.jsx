import React from 'react';

const OurWorkingProcess = () => {

    return (
        <div className='w-full text-center py-10 p-5'>
            <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 text-gray-700 ">We help you design your dream space in 3 simple steps </h3>
            {/* <p className="">It is a long established fact that a reader will be distracted by the readable content of a page</p> */}
            <div className="py-7 w-full md:w-4/5 mx-auto text-left flex flex-col md:flex-row gap-5 justify-between items-center">
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/xFKXQtf/Group-200.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">Consultation</h3>
                    <p className="text-sm">The success of every project lies behind an efficient consultation. We walk through with you at every phase of the project from start to end. Our expert team understands all your queries and works with you to develop a plan that helps you achieve your goals. </p>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/L0rgQ6z/Group-199.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">Choose Design</h3>
                    <p className="text-sm">No matter what your taste, we offer an extensive collection of designs to choose from. In our catalog, you can discover a design that will fit your style. Further, if you don't find a perfect design, you can get a personalized design that caters to your needs.</p>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/9bq6z32/Group-201.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">Work done</h3>
                    <p className="text-sm">At Motion Products, we strive to meet our client's expectations. We pride ourselves on our dedicated team, which works to deliver projects on time and within your budget. So, stay calm and let us do all the work for you until your satisfaction.</p>
                </div>
            </div>

        </div>
    );
};

export default OurWorkingProcess;