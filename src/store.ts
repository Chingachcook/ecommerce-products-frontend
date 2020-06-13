import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let initialState: any = {
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
};

if (localStorage.getItem('cartItems')) {
    initialState = {
        cart: {
            cartItems: JSON.parse(localStorage.getItem('cartItems') || '')
        },
        pizzas: {
            pizzaItems: []
        },
        checkout: {
            isCheckoutSuccess: false,
            isCheckoutError: false
        }
    }
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));