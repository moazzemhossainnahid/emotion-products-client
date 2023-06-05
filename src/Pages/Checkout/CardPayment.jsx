import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';

const CardPayment = () => {
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return (
        <div className=' min-h-screen w-full bg-[#daf5dc] '>
            <div className='max-w-[1280px] px-2 mx-auto grid grid-cols-1 md:grid-cols-2 md:my-12 my-6' >
                <div className='account-info bg-gradient-to-r from-green-700 to-green-900 md:rounded-l-md rounded-t-md shadow-lg text-white flex flex-col items-center py-6 md:py-12'>
                    <img src="https://i.ibb.co/8zS5W9j/Avatar-PNG-Picture.png" alt="user-img" className='h-20 w-20 object-cover rounded-full my-4 border-2 border-white'/>
                    <h2 className='text-xl from-accent-focus mb-4'>Customer Name</h2>
                </div>
                <div className='Card-info bg-white md:py-12 py-6 md:px-8 px-4   md:rounded-l-md rounded-b-md flex flex-col items-center'>
                    <h3 className='text-xl from-accent-content text-gray-600 my-4'>Enter The Card Number</h3>
                    <div className='md:w-2/3 mx-auto w-full'>
                        <Elements stripe={stripePromise}>
                            <Checkout/>
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardPayment;