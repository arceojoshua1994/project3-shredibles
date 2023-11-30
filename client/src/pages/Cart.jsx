import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {
 

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="section-title position-relative text-center mb-5">Your Cart</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card text-center shadow">
              <div className="card-body">
                  <div className="mb-4">
                    <img src="#" className="card-img-top mb-3" alt="product" style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
                    <h5 className="card-title">Item Name</h5>
                    <p className="card-text">$ Item Price x Quantity</p>
                    <button className="btn btn-primary btn-sm mb-3" onClick={() => removeFromCart(item.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Remove from Cart
                    </button>
                  </div>
                
                <hr/>
                <h3 className="font-weight-bold">Total: $</h3>
                <button className="btn btn-primary mt-4">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

