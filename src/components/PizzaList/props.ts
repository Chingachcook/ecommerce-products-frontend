import { PizzaData } from "../../models/PizzaData";
import { CartItemData } from "../../models/CartItemData";

export interface PizzaListProps {
    pizzaItems: PizzaData[];
    cartItems?: CartItemData[];
    addToCart?: (cartItems: CartItemData[] | undefined, pizza: PizzaData) => void;
    fetchPizzas?: () => void;
}