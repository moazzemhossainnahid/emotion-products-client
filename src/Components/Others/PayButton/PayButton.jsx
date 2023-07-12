import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const PayButton = ({ checkoutItem }) => {
    const [user] = useAuthState(auth);
    console.log(checkoutItem);
    const handleCheckout = () => {
        axios.post(`http://localhost:5000/create-checkout-session`, {
            checkoutItem,
            user
        }).then(res => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    return (
        <>
        <button onClick={() => handleCheckout()} className="">Check Out</button>
        </>
    );
};

export default PayButton;