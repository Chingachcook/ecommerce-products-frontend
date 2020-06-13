import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Card, Skeleton, Avatar } from 'antd';
import { PizzaListProps } from './props';
import { PizzaListState } from './state';
import { PizzaItem } from '../PizzaItem';
import { AppState } from '../../models/AppState';
import { fetchPizzas } from '../../actions/pizzasAction';
import { addToCart } from '../../actions/cartAction';
import Meta from 'antd/lib/card/Meta';

class PizzaList extends Component<PizzaListProps, PizzaListState> {
    constructor(props: PizzaListProps) {
        super(props);
        this.state = new PizzaListState();
    }

    componentDidMount() {
        this.props.fetchPizzas && this.props.fetchPizzas();
    }

    render() {
        const { pizzaItems, cartItems, addToCart } = this.props;
        const pizzaPreloaders = [];
        for(let i = 0; i < 9; i++) {
            pizzaPreloaders.push(
                <Col xs={24} sm={24} md={12} lg={8} xl={8} >
                    <Card style={{ minWidth: 250, marginRight: 16 }}>
                        <Skeleton loading={true} active>
                            <Meta
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
            );
        }

        return(
            <Row gutter={[16, 16]}>
                { pizzaItems!.length === 0 && pizzaPreloaders }
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