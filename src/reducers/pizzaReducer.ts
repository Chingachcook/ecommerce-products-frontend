import { FETCH_PIZZAS } from '../constants/ActionTypes';
import { Action } from '../models/Action';
import { AppState } from '../models/AppState';

const initialState: AppState = {
    pizzas: {
        pizzaItems: []
    },
    cart: {
        cartItems: []
    },
    checkout: {
        isCheckoutSuccess: false,
        isCheckoutError: false
    }
}

export default function(state: AppState | undefined = initialState, action: Action) {
    switch (action.type) {
        case FETCH_PIZZAS:
            return { ...state, pizzaItems: action.payload }
        default:
            return { ...state }
    }
}
