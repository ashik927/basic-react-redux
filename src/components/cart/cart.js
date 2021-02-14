import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/Action/cartaction';
import CartShow from './CartShow';

const Cart = (props) => {
    console.log(props);
    const {cart,removeFromCart} = props;
    return (
        <div>
            {
               cart.map(id =><li>{id} <button onClick={()=>removeFromCart(id)}>X</button></li>)
            }
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart()
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);