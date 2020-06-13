import { CartItemData } from "../../models/CartItemData";

export interface CartProps {
    cartItems: CartItemData[];
    isCheckoutSuccess?: boolean;
    isCheckoutError?: boolean;
    removeFromCart?: (cartItems: CartItemData[], cartItem: CartItemData) => void;
    checkout?: (cartItems: CartItemData[] | undefined) => void;
    checkoutDone?: () => void;
}
