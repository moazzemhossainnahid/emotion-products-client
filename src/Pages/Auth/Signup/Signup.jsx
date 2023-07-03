import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("click");
    };

    return (
        <div className="h-full bg-white w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded md:w-2/3 w-full p-10 mt-16">
                    <div className="w-full mx-auto py-7">
                        <img src="https://i.ibb.co/7VySsQR/logo.png" alt="" className="w-52 mx-auto" />
                    </div>
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl text-center font-semibold tracking-widest leading-6 text-gray-800">
                        Account Sign Up
                    </p>
                    <p className="text-sm text-center mt-10 font-medium leading-none text-gray-500">
                        Sign up to your account to access your profile, history, and any private pages you've been granted access to.
                    </p>
                    <div className="space-y-12 w-full h-full mt-10 py-7">
                        <div className="relative z-0 my-2">

                            <input placeholder=" " required name="name" onChange={handleChange} type="text" id="floating_standard" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" />
                            <label htmlFor="floating_standard" className="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                        </div>
                        <div className="relative z-0 my-2">

                            <input placeholder=" " required name="email" onChange={handleChange} type="email" id="floating_standard" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" />
                            <label htmlFor="floating_standard" className="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
                        </div>
                        <div className="relative z-0 my-2">

                            <input placeholder=" " required name="password" onChange={handleChange} type="password" id="floating_standard" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" />
                            <label htmlFor="floating_standard" className="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
                        </div>
                        <div className="relative z-0 my-2">

                            <input placeholder=" " required name="confirmpassword" onChange={handleChange} type="password" id="floating_standard" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" />
                            <label htmlFor="floating_standard" className="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Your Password</label>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button role="button" aria-label="create my account" className="bg-gray-900 hover:bg-gray-700 btn btn-lg rounded-full font-semibold w-40 mx-auto text-white capitalize flex justify-center">
                            Sign Up
                        </button>
                    </div>
                    <div className="py-7 text-center">
                        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                            Already have an account?{" "}
                            <span onClick={() => navigate("/signin")} tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                {" "}
                               Please Sign in
                            </span>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Signup;