import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return (
        <div className='container w-full'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='mt-6 border-2 p-4 rounded-md'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/* <p className='text-sm my-2 text-red-600 '>{ErrorMessage}</p> */}
                <button type="submit" className='py-4 px-3 w-full bg-green-600 rounded-md md:my-12 my-6 text-xl hover:bg-green-500 duration-300 ease-in-out text-white'
                    disabled={!stripe}>
                    Click to Pay
                </button>
            </form>
        </div>
    );
};

export default Checkout;