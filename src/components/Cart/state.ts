export class CartState {

    constructor(...inits: Partial<CartState>[]) {
        Object.assign(this, ...inits);
    }
}
