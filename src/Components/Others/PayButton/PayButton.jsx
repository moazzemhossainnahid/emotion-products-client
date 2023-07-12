import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const PayButton = ({ checkoutItems }) => {
    const [user] = useAuthState(auth);
    console.log(checkoutItems);
    const handleCheckout = () => {
        console.log(object);
        axios.post(`http://localhost:5000/create-checkout-session`, {
            checkoutItems,
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