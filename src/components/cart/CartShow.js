import React from 'react';
import cart from './cart';

const CartShow = (props) => {
    const {cart} = props;
    return (
        <div>
            <h1>{cart.id}</h1>
            <button onClick={() => props.removeFromCart(cart.id)}>remove</button>
        </div>
    );
};

export default CartShow;