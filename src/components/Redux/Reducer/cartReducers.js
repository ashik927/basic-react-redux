import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action/cartaction";

const initialState ={
    cart : [],
    products :[ {name: 'lenovo', id:'1'},
    {name: 'toshiba',id:'2'},
    {name: 'dell',id:'3'},
    {name: 'afsos',id:'4'},
    {name: 'hp',id:'5'},]
}
const cartReducers = (state=initialState , action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                products : [...state.products],
                cart : [...state.cart , action.id]
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const newCart = state.cart.filter(item => item !=id)
            return {
                products : [...state.products],
                cart : newCart
            }
        default:
            return state;
    }
}
export default cartReducers;