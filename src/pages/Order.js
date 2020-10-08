import React from 'react';
import '../stylesheet/Order.css'
import { Layout, Menu } from 'antd';
import { Row, Col, Card } from 'antd';
import Navbar from '../components/Navbar';
class Order extends React.Component {
    state = {
        loading: true,
        categories: [],
        products: []
    }

    async componentDidMount() {
        Promise.all([
            fetch('https://localhost:44362/api/v1/category'),
            fetch('https://localhost:44362/api/v1/Products')
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => this.setState({
                categories: data1,
                products: data2,
                loading: false
            }));
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="product-for-order">
                    <Row style={{ marginTop: '100px' }}>
                        <Col span={6}>
                            <Menu
                                onClick={this.handleClick}
                                style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                <Menu theme="white" mode="inline">
                                        { this.renderCate()}
                                </Menu>
                            </Menu>
                        </Col>
                        <Col span={11} style={{marginLeft:'-60px'}}>                        
                            {this.renderProduct()}
                        </Col>
                        <Col span={7}>
                            6
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    renderCate() {
        var tmp = [];
        this.state.categories.map((category, i) => {
            tmp.push(
                <Menu.Item icon={null}>
                    {category.categoryNm }
                </Menu.Item>
            );
        })
        return tmp;
    }

    renderProduct() {
        var tmp = [];
        this.state.products.map((product, i) => {
            tmp.push(
                <Card style={{ width: '100%' }}>
                    <div style={{display: 'flex'}}>
                        <div className="uk-first-column">
                            <img src={product.photo} style={{width:'13%'}}/>                      
                        </div>      
                        <div style={{marginLeft:'-300px', textAlign:'left'}}>
                            <p style={{textAlign:'left'}}>{product.productNm}</p>
                        </div>    
                    </div>                         
                </Card>
            );
        })
        return tmp;
    }
}
export default Order;