import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/ActionTypes';
import { Action } from '../models/Action';
import { AppState } from '../models/AppState';

const initialState: AppState = {
    pizzas: {
        pizzaItems: []
    },
    cart: {
        cartItems: []
    }
}

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { cartItems: action.payload }
        case REMOVE_FROM_CART:
            return { cartItems: action.payload }
        default:
            return { ...state, cartItems: [] }
    }
}
