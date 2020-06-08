import { CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../constants/ActionTypes';
import { CartItemData } from '../models/CartItemData';
import { PizzaProductOrder } from '../models/PizzaProductOrder';
import { CheckoutData } from '../models/CheckoutData';
import PizzaServiceApi from '../services/PizzaServiceApi';

const pizzaServiceApi = new PizzaServiceApi();

export const checkout = (items: CartItemData[] | undefined) => (dispatch: any) => {
    const pizzaProductOrders: PizzaProductOrder[] = [];
    items!.forEach((item) => {
      const pizzaProductOrder: PizzaProductOrder = {
        pizzaProduct: {
          id: item.id,
          name: item.name,
          price: item.price,
          size: item.size,
          pictureUrl: item.pictureUrl
        },
        quantity: item.quantity
      };
      pizzaProductOrders.push(pizzaProductOrder);
    });

    const requestData: CheckoutData = {
      pizzaProductOrders
    };

    pizzaServiceApi.sendCheckout(requestData)
        .then((payload) => {
            return dispatch({
                type: CHECKOUT_SUCCESS,
                payload
            });
        })
        .catch((payload) => {
            return dispatch({
                type: CHECKOUT_FAILURE,
                payload
            });
        });
};
