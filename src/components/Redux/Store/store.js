import { createStore } from 'redux';
import cartReducers from '../Reducer/cartReducers';

export const store = createStore(cartReducers);