import { CheckoutData } from "../models/CheckoutData";

export default class PizzaServiceApi {
    API_BASE = '/api';

    async getResource(url: string, method?: any, requestBody?: any) {
        const res = await fetch(
            `${this.API_BASE}${url}`,
            {
                method,
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(requestBody),
            }
        );
        const body = await res.json();
    
        if (!res.ok) {
            throw new Error(`Could not fetch url ${url}, recieved ${res.status}`)
        }
    
        return body;
    }

    async getPizzas() {
        const res = await this.getResource('/pizzas', 'GET');
        return res;
    }

    async sendCheckout(data: CheckoutData) {
        const res = await this.getResource('/orders', 'POST', data);
        return res;
    }
}