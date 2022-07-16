import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    //array of objects
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;


    }
    const tax = total * 0.1;

    const grandtotal = total + shipping + parseFloat(tax);


    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>selected item: {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax:
                {tax.toFixed(2)}</p>
            <h5>Grand Total : {grandtotal}</h5>

        </div>
    );
};

export default Cart;