import { PizzaData } from "./PizzaData";

export interface CartItemData extends PizzaData {
    quantity: number;
}
