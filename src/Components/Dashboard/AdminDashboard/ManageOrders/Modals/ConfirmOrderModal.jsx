
import { toast } from 'react-toastify';

const ConfirmOrderModal = ({ confirmOrder, setNumber, number }) => {

    const { createdAt, customerId, delivery_status, paymentIntentId, payment_status, products, shipping, userId, _id } = confirmOrder;

    const handleConfirmOrder = (id) => {
        const url = `https://emotion-products-server.up.railway.app/api/v1/orders/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(` Order id (${_id}) has been Confirmed.`);
                    setNumber(number + 1);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="confirm-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="confirm-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Confirm Order</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full md:w-4/5 order-2 md:order-1">
                            <h3 className="font-bold text-lg">{products && products[0]?.name}</h3>
                            <p className='my-4'>Customer ID: {customerId}</p>
                            <p className={` my-4`}>Delivery Status:  <span className={`${delivery_status === "confirmed" ? "text-white badge" : "text-gray-900 badge badge-warning"}`}>{delivery_status}</span></p>
                            <p className='my-4'>Payment Status: {payment_status}</p>
                            <p className='my-4'>Payment Intent ID: {paymentIntentId}</p>
                        </div>
                        <div className="w-full md:w-1/5 order-1 md:order-2">
                            <img src={products && products[0]?.image} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="confirm-order-modal" onClick={() => handleConfirmOrder(_id)} className="btn">Confirm</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmOrderModal;