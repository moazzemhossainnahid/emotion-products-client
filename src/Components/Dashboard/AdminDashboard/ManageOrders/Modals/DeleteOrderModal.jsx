
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteOrder, setNumber, number }) => {

    const { title, authorName, category, _id, cover } = deleteOrder;

    const handleDelete = (id) => {
        const url = `http://localhost:5000/api/v1/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(` Order id (${_id}) has been deleted.`);
                    setNumber(number + 1);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-post-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-post-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge  badge-error text-2xl badge-lg p-4'>Delete Post</h1>
                    <div className="w-full flex justify-between items-center gap-3">
                        <div className="w-3/5">
                            <h3 className="font-bold text-lg">{title}</h3>
                            <p className='my-4'>Author Name: {authorName}</p>
                            <p className='my-4'>Category: {category}</p>
                        </div>
                        <div className="w-2/5">
                            <img src={cover} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="delete-post-modal" onClick={() => handleDelete(_id)} className="btn">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteOrderModal;