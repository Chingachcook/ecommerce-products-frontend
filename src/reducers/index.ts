import { combineReducers } from 'redux';
import pizzasReducer from './pizzaReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';

export default combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer,
    checkout: checkoutReducer
});
