import React from 'react';

const MChairBestMeterials = () => {
    return (
        <div className='container w-full py-10'>
            <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between py-10">
                <div className="w-full md:w-4/6 mx-auto p-3">
                    <h3 className="text-2xl md:text-3xl font-semibold capitalize pb-5">we provide you the best material and <br /> quality Products</h3>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-start">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Airbags to Experience the Ultimate Relaxation</h3>
                            <p className="text-sm">No matter how tense your arms muscles are, with its arm airbags, you can experience targeted pressure that helps reduce stiffness and tension. So, say goodbye to discomfort and relax your stiff arms.</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Wireless Charging for Convenience</h3>
                            <p className="text-sm">This massage chair comes with wireless charging capabilities. Whether you want to charge your phone or any other device, this massage chair allows you to chair any appliance while you enjoy your massage. So, stop worrying about low battery life; this massage chair has got you covered. With this massage chair, you can get the best of both worlds - convenience and relaxation.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-start">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Shortcut Keys for Easy Customization</h3>
                            <p className="text-sm">With shortcut keys, you can personalize your massage experience by customizing the massage chair's settings according to your needs. These keys provide an easy way to adjust the mode and intensity of the massage. Further, they allow you to change the music or other settings in just a few clicks.</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Side Panel for Easy Access</h3>
                            <p className="text-sm">If you want to adjust the settings to your liking without having to get up, its side panel is for you. It allows you to access all of the chair's features while staying in the perfect position for relaxation.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/6 mx-auto">
                    <img src="https://i.ibb.co/7VSJ4ZF/Screenshot-10.png" alt="" className="p-5 flex justify-center" />
                </div>
            </div>
        </div>
    );
};

export default MChairBestMeterials;