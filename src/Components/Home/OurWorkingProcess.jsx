import React from 'react';

const OurWorkingProcess = () => {

    return (
        <div className='w-full text-center py-10 p-5'>
            <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl md:text-4xl pb-5 text-gray-700 ">Our Complete Collection With Luxury</h3>
            <p className="">It is a long established fact that a reader will be distracted by the readable content of a page</p>
            <div className="py-7 w-full md:w-4/5 mx-auto text-left flex flex-col md:flex-row gap-5 justify-between items-center">
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/xFKXQtf/Group-200.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">Consultation</h3>
                    <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/L0rgQ6z/Group-199.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">Choose Design</h3>
                    <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <img src="https://i.ibb.co/9bq6z32/Group-201.png" alt="icon" />
                    </div>
                    <h3 className="font-semibold text-xl">Work done</h3>
                    <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                </div>
            </div>

        </div>
    );
};

export default OurWorkingProcess;