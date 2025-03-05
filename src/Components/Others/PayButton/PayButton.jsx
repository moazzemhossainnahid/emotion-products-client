import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const PayButton = ({ checkoutItems }) => {
  const [user] = useAuthState(auth);
  console.log(checkoutItems);

  // const handleCheckout = () => {

  //     axios.post(`https://emotion-products-server-new.vercel.app/api/v1/stripe/create-checkout-session`, {
  //         checkoutItems,
  //         user,
  //     }, {
  //         method: 'POST',
  //         mode:"no-cors",
  //         headers: {
  //             'content-type': 'application/json',
  //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //         }
  //     }).then(res => {
  //         if (res.data.url) {
  //             window.location.href = res.data.url
  //         }
  //     }).catch((err) => console.log(err.message))
  // }

  const handleCheckout = () => {
    // send to database
    fetch(
      "https://emotion-products-server-new.vercel.app/api/v1/stripe/create-checkout-session",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "include",
        body: JSON.stringify({
          checkoutItems,
          user,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <button
        onClick={() => handleCheckout()}
        className="text-base leading-none w-full py-3 bg-primary border-primary border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
      >
        Pay Now
      </button>
    </>
  );
};

export default PayButton;
