import { CartItemData } from "../../models/CartItemData";

export interface CartProps {
    cartItems: CartItemData[];
    removeFromCart?: (cartItems: CartItemData[], cartItem: CartItemData) => void;
    checkout?: (cartItems: CartItemData[] | undefined) => void;
}
