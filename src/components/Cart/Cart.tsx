import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks.ts";
import {useState} from "react";
import Modal from "../Modal/Modal.tsx";
import {selectPizzas} from "../../store/pizzaSlice.ts";

const Cart = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const cartDishes = useAppSelector(selectPizzas);

    return (
        <>
            {cartDishes.length > 0 && (
                <Modal show={showModal} title="Order" onClose={() => setShowModal(false)}>
                    <div className="modal-body">
                        <p>Do you want to continue to checkout?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-danger"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-success"
                            onClick={() => navigate('/checkout')}
                        >
                            Order
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Cart;