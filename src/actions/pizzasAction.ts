import { RECEIVE_PIZZAS } from '../constants/ActionTypes';
import { PizzaData } from '../models/PizzaData';

export const receivePizzas = (pizzas: PizzaData[]) => ({
    type: RECEIVE_PIZZAS,
    pizzas
});
