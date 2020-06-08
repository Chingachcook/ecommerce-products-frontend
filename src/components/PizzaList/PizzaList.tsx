import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { PizzaListProps } from './props';
import { PizzaListState } from './state';
import { PizzaItem } from '../PizzaItem';
import { AppState } from '../../models/AppState';
import { fetchPizzas } from '../../actions/pizzasAction';
import { addToCart } from '../../actions/cartAction';

class PizzaList extends Component<PizzaListProps, PizzaListState> {
    constructor(props: PizzaListProps) {
        super(props);
        this.state = new PizzaListState();
    }

    componentDidMount() {
        console.log(this.props)
        this.props.fetchPizzas && this.props.fetchPizzas();
    }

    componentWillReceiveProps(nextState: any) {
        console.log(nextState);
    }

    render() {
        const { pizzaItems, cartItems, addToCart } = this.props;

        return(
            <Row gutter={[16, 16]}>
               {
                    pizzaItems!.map((pizza, index) => {
                        return (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} key={ pizza.name + index }>
                                <PizzaItem
                                    pizza={ pizza }
                                    onclick={ () => addToCart!(cartItems, pizza) }
                                />
                            </Col>
                        )
                    })
               } 
            </Row>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    pizzaItems: state.pizzas.pizzaItems,
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps, { fetchPizzas, addToCart })(PizzaList);