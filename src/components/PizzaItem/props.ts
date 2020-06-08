import { PizzaData } from "../../models/PizzaData";

export interface PizzaItemProps {
    pizza: PizzaData;
    onclick?: (e: any, pizza: PizzaData) => void;
}