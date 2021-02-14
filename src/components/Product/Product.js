import React from 'react';

const Product = (props) => {
    const {addToCart} = props;
    return (
        <div style={{ border :"1px solid red", padding:"5px 5px 5px 5px"}}>
            <h1>{props.product.name}</h1>
            <button onClick={() => addToCart(props.product.id) }>add to cart</button>
        </div>
    );
};

export default Product;