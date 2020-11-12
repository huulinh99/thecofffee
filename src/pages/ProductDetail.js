import React from 'react'
import Product from './Product'
import '../stylesheet/ProductDetail.css'
import Navbar from '../components/Navbar';
import { Button, Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            productId: this.props.match.params.productId,
            productsInfo: {}
        }
    }

    async componentDidMount() {
        console.log(this.state.productId);
        const url = `https://coffee-shop-api.azurewebsites.net/api/v1/Products/${this.state.productId}`;
        const respone = await fetch(url);
        const data = await respone.json();
        this.setState({
            productsInfo: data,
            loading: false
        })
        console.log(this.state.productsInfo);
        console.log(this.state.productsInfo.productNm);        
    }
    render() {
        return (
            <div>
                <Navbar />
                <Row style={{ marginTop: '100px', height: '90vh' }}>
                    <Col xs={24} md={16}>
                        <img style={{ width: '500px', height: '500px' }} src={this.state.productsInfo.photo} alt="ssssss" />
                    </Col>
                    <Col xs={24} md={8} >
                        <h1 className="info-product-title">{this.state.productsInfo.productNm}</h1>
                        <p className="product-detail-short-des">{this.state.productsInfo.description}</p>
                        <p style={{ textAlign: 'left', marginLeft: '-100px', color: '#EA8025', fontSize: '24px', fontFamily: 'Bebas Neue' }}>{this.state.productsInfo.price}Đ</p>
                        <Button style={{
                            backgroundColor: '#EA8025', color: '#fff', padding: '15px 30px', fontWeight: '700',
                            fontSize: '18px', width: '30%', fontFamily: 'Bebas Neue', border: 'none',height:'55px', marginLeft: '-535px'
                        }}>
                            <Link to='/Order' target='_blank' style={{textDecoration:'none'}}>
                                buy now
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProductDetail;