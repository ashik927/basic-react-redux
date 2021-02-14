import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../Redux/Action/cartaction';

const Shop = (props) => {
    const {products , addToCart } = props;
    return (
        <div>
            <h1 style={{ color:"black" }}>This is shop</h1>
            {
                products.map(pd => <Product product={pd} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps ={
    addToCart:addToCart
}

// const connectToStore = connect(mapStateToProps,mapDispatchToProps);
// connect(mapStateToProps,mapDispatchToProps)(shop);



export default connect(mapStateToProps,mapDispatchToProps)(Shop);