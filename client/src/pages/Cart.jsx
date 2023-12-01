import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="container-fluid py-5">
            {/* ... */}
            <div className="col-lg-6">
                {/* ... */}
                {cart.map((item, index) => (
                    <div key={index} className="mb-4">
                        {/* ... Display item details */}
                        <button className="btn btn-primary btn-sm mb-3" onClick={() => removeFromCart(item.id)}>
                            <FontAwesomeIcon icon={faTrash} /> Remove from Cart
                        </button>
                    </div>
                ))}
                {/* ... */}
            </div>
        </div>
    );
}

export default Cart;
