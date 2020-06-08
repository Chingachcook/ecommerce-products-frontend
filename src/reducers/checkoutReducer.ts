import { CHECKOUT_FAILURE, CHECKOUT_SUCCESS, CHECKOUT_REQUEST } from '../constants/ActionTypes';
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
        case CHECKOUT_SUCCESS:
            return {  }
        case CHECKOUT_FAILURE:
            return {  }
        case CHECKOUT_REQUEST:
            return {  };
        default:
            return { ...state }
    }
}
