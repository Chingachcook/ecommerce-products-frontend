import { FETCH_PIZZAS } from '../constants/ActionTypes';
import PizzaServiceApi from '../services/PizzaServiceApi';

const pizzaServiceApi = new PizzaServiceApi();

export const fetchPizzas = () => (dispatch: any) => {
    pizzaServiceApi.getPizzas()
        .then((payload) => {
            return dispatch({ type: FETCH_PIZZAS, payload });
        });
};
