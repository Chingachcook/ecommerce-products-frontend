import React from 'react';
import { withPizzaServiceContext } from '../hoc';

function App({ pizzaService }: any) {
  console.log(pizzaService.getPizzas());
  return (
    <div className="App">
      react app
    </div>
  );
}

export default withPizzaServiceContext(App);
