import { PizzaData } from "../../models/PizzaData";
import { CartItemData } from "../../models/CartItemData";

export class AppState {
    pizzaItems: PizzaData[] = [];
    cartItems: CartItemData[] = [];

    constructor(...inits: Partial<AppState>[]) {
        Object.assign(this, ...inits);
    }
}
