import React, { Component } from 'react';
import { Row, Layout, Col } from 'antd';
import { CustomLayout } from '../../containers/CustomLayout';
import PizzaList from '../PizzaList';
import { AppProps } from './props';
import { AppState } from './state';
import Cart from '../Cart';

const { Content } = Layout;

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = new AppState();
  }

  render() {
    return (
      <div className="App">
        <CustomLayout>
          <Content style={{ padding: '0 50px', minHeight: 280, background: '#fff' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={14} md={18} lg={18} xl={18}>
                <PizzaList/>
              </Col>
              <Col xs={24} sm={10} md={6} lg={6} xl={6}>
                <Cart/>
              </Col>
            </Row>
          </Content>
        </CustomLayout>
      </div>
    );
  }
}
