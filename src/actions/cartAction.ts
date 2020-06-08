import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/ActionTypes';
import { CartItemData } from '../models/CartItemData';
import { PizzaData } from '../models/PizzaData';

export const addToCart = (items: CartItemData[] | undefined, pizza: PizzaData) => (dispatch: any) => {
    const payload = items!.splice(0);
    let pizzaAlreadyInCart = false;
    payload!.forEach((item: CartItemData) => {
      if (item.id === pizza.id) {
        pizzaAlreadyInCart = true;
        item.quantity++;
      }
    });
    
    if (!pizzaAlreadyInCart) {
      payload!.push({...pizza, quantity: 1})
    }

    localStorage.setItem('cartItems', JSON.stringify(payload));

    return dispatch({
        type: ADD_TO_CART,
        payload
    })
};

export const removeFromCart = (items: CartItemData[], pizza: PizzaData) => (dispatch: any) => {
    let cartItemsShallowCopy = items;

    cartItemsShallowCopy = cartItemsShallowCopy.filter((item) => item.id !== pizza.id);

    localStorage.setItem('cartItems', JSON.stringify(cartItemsShallowCopy));

    return dispatch({
        type: REMOVE_FROM_CART,
        payload: cartItemsShallowCopy
    })
};


