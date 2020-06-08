import { PizzaData } from "./PizzaData";
import { CartItemData } from "./CartItemData";

export interface AppState {
    pizzas: {
        pizzaItems: PizzaData[];
    };
    cart: {
        cartItems: CartItemData[];
    }
}
