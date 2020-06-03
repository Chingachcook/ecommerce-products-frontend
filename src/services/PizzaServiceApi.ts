import { PizzaData } from "../models/PizzaData";

export default class PizzaServiceApi {
    async getResource(url: string) {
        const res = await fetch(url);
        const body = await res.json();
    
        if (!res.ok) {
            throw new Error(`Could not fetch url ${url}, recieved ${res.status}`)
        }
    
        return body;
    }

    getPizzas() {
        return this.getResource('/api/pizzas');
    }
}