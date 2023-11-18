import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const PayButton = ({ checkoutItems }) => {
    const [user] = useAuthState(auth);
    console.log(checkoutItems);
    const handleCheckout = () => {

        axios.post(`https://emotion-products-server-iii.vercel.app/api/v1/stripe/create-checkout-session`, {
            checkoutItems,
            user,
        }, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    return (
        <>
            <button onClick={() => handleCheckout()} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Check Out</button>
        </>
    );
};

export default PayButton;