import React, { useEffect, useState } from 'react';
import ManageOrdersRow from './ManageOrdersRow';
import DeleteOrderModal from './Modals/DeleteOrderModal';
import ConfirmOrderModal from './Modals/ConfirmOrderModal';

const ManageOrders = () => {
    const [number, setNumber] = useState(0);
    const [orders, setOrders] = useState(null);
    const [confirmOrder, setConfirmOrder] = useState(null);
    const [deleteOrder, setDeleteOrder] = useState(null);


    useEffect(() => {
        fetch('https://emotion-products-server-new.vercel.app/api/v1/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [number]);


        // Sort the array by createdAt in descending order
        orders?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Orders: {orders?.length}</p>
                    <table className="border-collapse w-full bg-slate-200">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className='text-center'>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">customer Id</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Order Date/Time</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Payment Status</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}

                            {
                                orders?.sort((a, b) => a - b)?.map((order, index) =>
                                    <ManageOrdersRow
                                        key={order._id}
                                        order={order}
                                        index={index}
                                        setDeleteOrder={setDeleteOrder}
                                        setConfirmOrder={setConfirmOrder}
                                    ></ManageOrdersRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder} setNumber={setNumber} number={number} ></DeleteOrderModal>
                }
                {
                    confirmOrder && <ConfirmOrderModal confirmOrder={confirmOrder} setNumber={setNumber} number={number} ></ConfirmOrderModal>
                }

            </div>
        </div>
    );
};

export default ManageOrders;