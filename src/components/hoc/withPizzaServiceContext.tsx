import React from 'react';
import { PizzaServiceConsumer } from '../PizzaServiceContext/PizzaServiceContext';
import PizzaServiceApi from '../../services/PizzaServiceApi';

export function withPizzaServiceContext<
    P extends { pizzaService?: PizzaServiceApi },
    R = Omit<P, 'pizzaService'>
>(WrappedComponent: React.ComponentClass<P> | React.StatelessComponent<P>
    ): React.SFC<R> {

    return function BoundComponent(props: R) {
        return(
            <PizzaServiceConsumer>
                { (pizzaService) => <WrappedComponent {...props as unknown as P} pizzaService={pizzaService} />}
            </PizzaServiceConsumer>
        )
    }
}