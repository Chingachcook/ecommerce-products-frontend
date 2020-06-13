import { CHECKOUT_FAILURE, CHECKOUT_SUCCESS, CHECKOUT_DONE } from '../constants/ActionTypes';
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

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case CHECKOUT_SUCCESS:
            return { checkoutResponse: action.payload, isCheckoutSuccess: true, isCheckoutError: false }
        case CHECKOUT_FAILURE:
            return { checkoutResponse: action.payload, isCheckoutSuccess: false, isCheckoutError: true }
        case CHECKOUT_DONE:
            return { isCheckoutSuccess: false, isCheckoutError: false }
        default:
            return { ...state }
    }
}
