import React from 'react';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';


const Footer = () => {


    return (
        <footer className='container w-full'>
            <div className='w-full mx-auto bg-[#353535]'>
                <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-10 ">
                    <div className="w-full md:w-2/5 mx-auto space-y-2 text-center md:text-left">
                        <h3 className="text-2xl text-white">Stay Connected With Us</h3>
                        <p className="text-gray-100 text-sm">Not only does my new carport look amazing, but it's also added so much value to my home. </p>
                    </div>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="form-control w-full flex justify-center">
                            <div className="input-group w-full flex justify-center">
                                <input type="text" placeholder="Enter Email Address" className="input input-bordered" />
                                <button className="btn btn-square w-28 text-white bg-[#00C2FF]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#212121] py-7">
                    <div className="w-full md:w-5/6 mx-auto flex flex-col gap-3 py-7 ">
                        <footer className="footer p-10 bg-transparent text-base-200">
                            <div>
                                <span className="footer-title">About carport</span>
                                <a className="link link-hover">About Us</a>
                                <a className="link link-hover">Contact Us</a>
                                <a className="link link-hover">Terms & Conditions</a>
                                <a className="link link-hover">Privacy Policy</a>
                            </div>
                            <div>
                                <span className="footer-title">Customer Service</span>
                                <a className="link link-hover">About Your Order</a>
                                <a className="link link-hover">Wish list</a>
                                <a className="link link-hover">Comparison List </a>
                            </div>
                            <div>
                                <span className="footer-title">Contact Us</span>
                                <a className="link link-hover flex gap-2"> <FaMapMarkerAlt /> 52/2, School Street Road</a>
                                <a className="link link-hover flex gap-2"> <FaClock /> Mon-Sun 9.00 - 18.00</a>
                                <a className="link link-hover flex gap-2"> <FaPhoneAlt /> +9978-4578-145</a>
                                <a className="link link-hover flex gap-2"> <FaEnvelope /> hello@carport.com</a>
                            </div>
                        </footer>
                        <div className="px-10 py-4 bg-transparent text-base-200">
                            <div className="flex gap-3 pb-5 justify-center items-center">
                                <FaFacebook className='text-2xl text-gray-500' />
                                <FaInstagram className='text-2xl text-gray-500' />
                                <FaSkype className='text-2xl text-gray-500' />
                                <FaTwitter className='text-2xl text-gray-500' />
                                <FaPinterest className='text-2xl text-gray-500' />
                                <FaLinkedin className='text-2xl text-gray-500' />
                            </div>
                            <hr />
                            <div className="text-center pt-5">
                                <p>© 2020 - 2023 carport.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;