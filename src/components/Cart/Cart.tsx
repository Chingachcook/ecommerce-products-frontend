import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { formatDollarCurrency, formatEuroCurrency } from '../../utils';
import { CartProps } from './props';
import { CartState } from './state';
import { AppState } from '../../models/AppState';
import { removeFromCart } from '../../actions/cartAction';
import { checkout } from '../../actions/checkoutAction';

class Cart extends Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);
        this.state = new CartState();
    }

    render() {
        const { cartItems, removeFromCart, checkout } = this.props;
        return(
            <Card>
                { cartItems!.length === 0 ? "Cart is empty" : <div>You have { cartItems.length } in the cart</div> }
                { cartItems!.length > 0 &&
                    <div>
                        <ul>
                            { cartItems.map((item, index) =>
                                <li key={ item.name+index }>
                                    <b>{ item.name } </b>
                                    x { item.quantity } = { `${formatDollarCurrency(item.quantity * item.price)}` }
                                    <Button
                                        danger
                                        block
                                        onClick={ () => removeFromCart!(cartItems, item) }
                                    >
                                        X
                                    </Button>
                                </li>
                            ) }
                        </ul>
                        Delivery: 5$
                        <br/>
                        Total: { `${formatDollarCurrency(5 + cartItems.reduce((a, b) => a + b.quantity * b.price, 0))} 
                        ~ ${formatEuroCurrency(5*0.89 + cartItems.reduce((a, b) => a + b.quantity * b.price, 0))}` }
                        <br/><br/>
                        <Button
                            onClick={ () => checkout!(cartItems) }
                        >
                            Checkout
                        </Button>
                    </div>
                }
            </Card>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { removeFromCart, checkout })(Cart);
