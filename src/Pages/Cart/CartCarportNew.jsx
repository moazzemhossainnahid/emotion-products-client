import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaEuroSign } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import PayButton from "../../Components/Others/PayButton/PayButton";
import { toast } from "react-toastify";
import UseCarport from "../../Hooks/useCarport";

const CartCarportNew = () => {
  const { id } = useParams();
  const [carports] = UseCarport();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const carport = carports?.find((c) => c?.id === id);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(carport?.price);
  const [downPayment, setDownPayment] = useState(0);
  const [error, setError] = useState("");
  const downPayRef = useRef(null);

  useEffect(() => {
    const newPrice = carport?.price * quantity || 0;
    setTotalPrice(downPayment > 0 ? downPayment : newPrice);
  }, [carport, downPayment, quantity]);

  const item = [
    {
      id: carport?.id,
      name: carport?.title,
      description: carport?.mainDesc,
      category: carport?.category,
      image: carport?.images?.banner,
      quantity: quantity,
      price: carport?.price,
      total: carport?.price * quantity,
      downPay: downPayment,
      duePayment: downPayment > 0 ? carport?.price * quantity - downPayment : 0,
      payableAmount: totalPrice,
    },
  ];

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (quantity < 5) setQuantity((prev) => prev + 1);
  };

  const processDownPayment = () => {
    const downPayValue = parseFloat(downPayRef?.current?.value) || 0;
    const expectedDownPayment = (carport?.price * quantity) / 2;

    if (downPayValue < 50) {
      setError(`Minimum down payment is €50.`);
      setDownPayment(0);
      return;
    }
    if (downPayValue < expectedDownPayment) {
      setError(
        `Down payment should be at least €${expectedDownPayment.toFixed(
          2
        )} (50% of total).`
      );
      setDownPayment(0);
      return;
    }

    setError("");
    setDownPayment(downPayValue);
    toast.success(`Down payment of €${downPayValue.toFixed(2)} accepted.`);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-fit container mx-auto">
        <div className="w-full lg:px-20 mx-auto relative h-full pt-10">
          <h3 className="text-2xl md:text-3xl font-bold pl-5">Checkout</h3>
          <div className="w-full h-fit flex md:flex-row flex-col justify-end border border-primary/20 my-10">
            <div className="w-full lg:w-2/4 flex flex-col items-center p-3 lg:p-10 border-gray-200">
              <img
                src={item[0]?.image}
                alt=""
                className="w-full h-full rounded-lg object-center object-cover max-h-64"
              />
              <div className="w-full flex justify-between items-center pt-5">
                <p className="text-base font-semibold text-gray-500">{item[0]?.name}</p>
                <div className="flex items-center gap-3">
                  <button
                    className="btn btn-sm btn-outline px-3"
                    onClick={handleDecrease}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-white border-x">
                    {String(quantity).padStart(2, "0")}
                  </span>
                  <button
                    className="btn btn-sm btn-outline px-3"
                    onClick={handleIncrease}
                    disabled={quantity === 5}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* Right Section - Summary */}
            <div className="md:w-2/4 bg-primary/5 w-full h-full">
              <div className="flex flex-col px-10 py-10 justify-between overflow-y-auto">
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Order Summary
                  </p>
                  <div className="flex items-center font-semibold justify-between pt-7">
                    <p className="text-xl text-gray-800">Subtotal</p>
                    <p className="text-xl text-gray-800 flex gap-2 items-center">
                      <FaEuroSign /> {(carport?.price * quantity)?.toFixed(2)}
                    </p>
                  </div>

                  {/* Down Payment Section */}
                  <div className="w-full flex flex-col mt-5 border-b pb-3">
                    <p className="text-lg font-medium">
                      Down Payment <span className="text-sm">(Optional)</span>:
                    </p>
                    <div className="w-full flex items-center gap-2 mt-2">
                      <input
                        type="text"
                        ref={downPayRef}
                        placeholder="Enter Amount"
                        className={`outline-none rounded-md px-2 bg-gray-200 border text-sm font-semibold text-gray-800 w-full h-10 ${
                          error ? "border-red-500" : ""
                        }`}
                      />
                      <button
                        onClick={processDownPayment}
                        className="px-3 rounded bg-primary text-white h-10"
                      >
                        Process
                      </button>
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>
                </div>

                {/* Total Calculation */}
                <div>
                  {downPayment > 0 && (
                    <div className="flex justify-between lg:pt-5 pt-5">
                      <p className="text-xl text-gray-800">Total</p>
                      <p className="text-xl font-bold text-gray-800 flex gap-2 items-center">
                        <FaEuroSign /> {(carport?.price * quantity)?.toFixed(2)}
                      </p>
                    </div>
                  )}
                  {downPayment > 0 && (
                    <div className="flex justify-between lg:pt-5 pt-5 border-b pb-3">
                      <p className="text-xl text-gray-800">Down Payment</p>
                      <p className="text-xl font-bold text-gray-800 flex gap-2 items-center">
                        <FaEuroSign /> {downPayment.toFixed(2)}
                      </p>
                    </div>
                  )}
                  {!downPayment > 0 && (
                    <div className="flex justify-between py-5">
                      <p className="text-xl font-bold text-gray-800">
                        Grand Total
                      </p>
                      <p className="text-xl font-bold text-gray-800 flex gap-2 items-center">
                        <FaEuroSign /> {(carport?.price * quantity).toFixed(2)}
                      </p>
                    </div>
                  )}
                  <div
                    className={`${
                      error ||
                      (downPayment > 0 &&
                        downPayment < (carport?.price * quantity) / 2)
                        ? "pointer-events-none select-none opacity-50"
                        : ""
                    }`}
                  >
                    <PayButton
                      checkoutItems={item}
                      disabled={
                        !!error ||
                        (downPayment > 0 &&
                          downPayment < (carport?.price * quantity) / 2)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCarportNew;
