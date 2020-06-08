import { PizzaData } from "./PizzaData";
import { CartItemData } from "./CartItemData";

export interface AppContext {
    pizzaItems: PizzaData[];
    cartItems: CartItemData[];
}
