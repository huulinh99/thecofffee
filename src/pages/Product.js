import React from 'react';
import { Layout, Menu } from 'antd';
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import {BrowserRouter,Link} from "react-router-dom";

import '../stylesheet/Product.css'
//import { Row, Col } from 'antd';
import Navbar from '../components/Navbar';

const { Content, Sider } = Layout;
class Product extends React.Component {
    state = {
        loading: true,
        categories: [],
        productByCategory: []
    }

    async componentDidMount() {
        Promise.all([
            fetch('https://coffee-shop-api.azurewebsites.net/api/v1/category'),
            fetch('https://coffee-shop-api.azurewebsites.net/api/v1/category/products')
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => this.setState({
                categories: data1,
                productByCategory: data2,
                loading: false
            }));
    }


    render() {
        return (
            <div class="product-list-page">
                <Navbar />
                <div className="product-background"></div>
                <div className="collection-menu-wrap">
                    <div className="sticky-sidebar">
                        {this.state.loading || !this.state.categories ? (<div>loading...</div>) : (
                            <Layout style={{ marginTop: '110px', marginLeft: '100px' }}>
                                <Sider
                                    breakpoint="lg"
                                    collapsedWidth="0"
                                    onBreakpoint={broken => {
                                        console.log(broken);
                                    }}
                                    onCollapse={(collapsed, type) => {
                                        console.log(collapsed, type);
                                    }}
                                >
                                    <Menu theme="white" mode="inline">
                                        { this.renderCate()}
                                    </Menu>
                                </Sider>
                                <Layout>
                                    <Content style={{ margin: '24px 16px 0' }}>
                                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                            { this.renderProduct()}
                                        </div>
                                    </Content>
                                </Layout>
                            </Layout>
                        )}
                    </div>
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
        this.state.productByCategory.map((product, i) => {
            tmp.push(
                <div style={{marginLeft:'-35px',marginRight:'-130px',paddingLeft:'-50px'}}>
                    <h1 style={{paddingLeft:'27px'}}>{product.categoryNm}</h1>
                    <Row gutter={16} style={{paddingLeft:'27px'}}>
                    {product.product.map((productEachCategory, i) => {     
                        console.log("Entered");                 
                        // Return the element. Also pass key     
                        return (
                            <div style={{marginLeft:'-30px'}}>                                                                           
                                <Col span={8} style={{ marginBottom:'30px',marginLeft:'50px'}}>
                                    <Card hoverable
                                        style={{ width: 290 }}
                                        cover={<img alt={productEachCategory.description} src={productEachCategory.photo} />} onClick={(productId) => this.productDetail(productId)}>                               
                                        <BrowserRouter>
                                            <h3 to="/" className="product-name" style={{marginLeft:'10px'}}>{productEachCategory.productNm}</h3>
                                        </BrowserRouter>                                     
                                        <div className="product-price" style={{marginLeft:'10px'}}>{productEachCategory.price} Đ</div>
                                        <BrowserRouter>                                      
                                            <Button  size='400px' className="buy" style={{marginTop:'15px', marginRight:'10px', marginLeft:'10px'}}>
                                            <Link to='/Order' target='_blank'>
                                                buy now
                                            </Link>
                                            </Button>                
                                        </BrowserRouter>                                                                                      
                                            <Button  size='400px' className="more" style={{marginTop:'15px'}}>
                                                    see more
                                            </Button>                                              
                                    </Card>
                                </Col>                            
                            </div>
                        ) 
                    })}
                    </Row>
                </div>               
            );
        })
        return tmp;
    }
}

export default Product;