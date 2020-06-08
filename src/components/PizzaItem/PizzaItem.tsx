import React from 'react';
import { Card, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import { PizzaItemProps } from './props';
import { formatDollarCurrency } from '../../utils';

export const PizzaItem: React.SFC<PizzaItemProps> = (props) => {
    const { pizza, onclick } = props;

    return (
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={ pizza.pictureUrl } />}
        >
            <Meta
                title={ pizza.name }
                description={ `${formatDollarCurrency(pizza.price)}` }
                style={{ padding: '0 0 10px 0' }}
            />
            <Button
                block
                onClick={ (e) => onclick!(e, pizza) }
            >
                Add
            </Button>
        </Card>
    );
};
