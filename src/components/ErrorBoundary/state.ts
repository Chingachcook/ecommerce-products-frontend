export class ErrorBoundaryState {
    hasError: boolean = false;

    constructor(...inits: Partial<ErrorBoundaryState>[]) {
        Object.assign(this, ...inits);
    }
}
