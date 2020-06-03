import { combineReducers } from 'redux';
import { RECEIVE_PIZZAS, ADD_TO_CART } from '../constants/ActionTypes';
import { PizzaData } from '../models/PizzaData';

export const pizzas = (state: any, action: any) => {
    console.log(action)
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state
        };
      default:
        return state;
    }
}   

const byId = (state: any = {}, action: any) => {
    switch (action.type) {
        case RECEIVE_PIZZAS:
            return {
                ...state,
                ...action.pizzas.reduce((obj: any, pizza: any) => {
                    obj[pizza.id] = pizza
                    return obj
                }, {})
            }
        default:
            const { pizzaId } = action;
            if (pizzaId) {
                return {
                    ...state,
                    [pizzaId]: pizzas(state[pizzaId], action)
                };
            }
        return state;
    }
}
  
const visibleIds = (state = [], action: any) => {
    switch (action.type) {
        case RECEIVE_PIZZAS:
            return action.pizzas.map((pizza: PizzaData) => pizza.id);
        default:
            return state;
    }
}
  
export default combineReducers({
    byId,
    visibleIds
});
  
export const getPizza = (state: any, id: number) =>
    state.byId[id];
  
export const getVisibleProducts = (state: any) =>
    state.visibleIds.map((id: number) => getPizza(state, id));
