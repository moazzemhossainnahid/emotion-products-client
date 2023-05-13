import React from 'react';

const ExclusivePackages = () => {
    return (
        <div className='w-full md:w-5/6 mx-auto bg-white py-10'>
            <div className="w-full">
                <h3 className="text-2xl font-semibold">Take A Look On Our exclusive <br /> Projects.</h3>
                <div className="flex items-center pt-3">
                    <p className="h-1 bg-[#00C2FF] w-32"></p>
                    <p className="border-b border-[#00C2FF] w-20"></p>
                </div>
            </div>

            <section className="w-full">
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto">

                    </div>
                    <div className="w-full md:w-3/6 mx-auto">

                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExclusivePackages;