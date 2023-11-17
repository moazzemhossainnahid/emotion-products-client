import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaEuroSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PayButton from '../../Components/Others/PayButton/PayButton';

const Cart = () => {
    const navigate = useNavigate();
    // const [isChecked, setIsChecked] = useState(false);
    const [user] = useAuthState(auth);

    const item = [
        // {
        //     id: 123,
        //     name: "Exclusive Carport",
        //     description: "this is carport in california USA",
        //     category: "carport",
        //     badge: "top",
        //     image: "https://i.ibb.co/qdbwmF3/Rectangle-168.png",
        //     price: 6000,
        // },
        {
            id: 1,
            name: "Exclusive Massage Chair",
            description: "this is Massage Chair in california USA",
            category: "massagechair",
            badge: "top",
            image: "https://i.ibb.co/qdbwmF3/Rectangle-168.png",
            price: 6000,
        }
    ]

    return (
        <div className='container z-30 w-full'>
            <div>
                <div className="w-full h-full bg-black sticky-0" id="chec-div">
                    <div className="w-full relative h-full transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                <div onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    <p className="text-sm pl-2 leading-none">Back</p>
                                </div>
                                <div className="py-5">
                                    <div className="flex justify-between gap-3">
                                        <h3 className="font-semibold"><span className="font-bold">1</span> Item in Order Request</h3>
                                        <h3 className="font-semibold">Order Request Subtotal: <br /> <p className="text-base flex gap-2 items-center pt-2 justify-end font-black leading-none text-gray-800"><FaEuroSign /> <span className="">{item[0]?.price}.00</span></p> </h3>
                                    </div>

                                    <div className="w-full flex justify-end pt-3">
                                        <button onClick={() => navigate('/cart')} className=" text-white bg-[#00C2FF] border-0 justify-center btn btn-warning px-7 py-2 rounded">
                                            <p onClick={() => navigate(-1)} className="flex tracking-widest gap-2">View and Edit Order Request</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="md:flex items-center py-8 border-y border-gray-200">
                                    <div className="w-1/4">
                                        <img src="https://i.ibb.co/qdbwmF3/Rectangle-168.png" alt className="w-20 h-full object-center object-cover" />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4">
                                        <p style={{ fontFamily: 'Silk Serif' }} className="text-base font-semibold leading-none text-gray-500">North wolf Carport</p>

                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex gap-1 items-center">
                                                <h3 className="font-semibold">Qty</h3>
                                                <select className="py-2 px-1 bg-white mr-6 focus:outline-none">
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                            </div>
                                            <p className="text-base flex gap-2 items-center font-black leading-none text-gray-800"><FaEuroSign /> <span className="">{item[0]?.price}.00</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                    <div>
                                        <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                        <div className="flex items-center justify-between pt-16">
                                            <p className="text-base leading-none text-gray-800">Subtotal</p>
                                            <p className="text-base leading-none text-gray-800 flex gap-2 items-center"><FaEuroSign /> {(item[0]?.price).toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Shipping</p>
                                            <p className="text-base leading-none text-gray-800 flex gap-2 items-center"><FaEuroSign /> 30</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Tax</p>
                                            <p className="text-base leading-none text-gray-800 flex gap-2 items-center"><FaEuroSign /> {(item[0]?.price * 2 / 100).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-gray-800">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {(item[0]?.price + 30 + (item[0]?.price * 2 / 100)).toFixed(2)}</p>
                                        </div>
                                        {/* <button onClick={() => navigate('/checkout')} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                            Checkout
                                        </button> */}
                                        <PayButton checkoutItems={item} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 5px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </div>
    );
};

export default Cart;