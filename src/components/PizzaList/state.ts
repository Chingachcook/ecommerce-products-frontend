export class PizzaListState {
    constructor(...inits: Partial<PizzaListState>[]) {
        Object.assign(this, ...inits);
    }
}
