import React from 'react'
import { Card, Col, Row } from 'antd';
import {BrowserRouter} from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import '../stylesheet/Menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className="site-card-wrapper row">
                <Row>
                    <h2 className="section-heading">Menu</h2>  
                </Row>
                <Row gutter={16} className="menu">
                    <Col span={8}>
                        <Card hoverable
                              style={{ width: 340 }}
                              cover={<img alt="example" src="http://product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg" />}>                               
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', width: '100%'}}>TRÀ OOLONG BƯỞI MẬT ONG</Link>
                                </BrowserRouter>                                     
                                <div style={{display: 'block'}}>50,000 đ</div>
                                <Button  size='400px' className="buy">
                                    MUA NGAY
                                </Button>    
                                <Button  size='400px' className="more">
                                    TÌM HIỂU THÊM
                                </Button>                                              
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable
                              style={{ width: 340 }}
                              cover={<img alt="example" src="http://product.hstatic.net/1000075078/product/macca_d56d5ab8dde4455aa7f19d29b5fff763_large.jpg" />}>
                            <BrowserRouter>
                                <Link to="/" style={{color: 'inherit', float:'left',width: '100%'}}>TRÀ SỮA MẮC CA TRÂN CHÂU TRẮNG</Link>
                            </BrowserRouter>  
                            <p>45,000 đ</p>     
                            <Button  size='300px' className="buy">
                                    MUA NGAY
                                </Button>    
                                <Button  size='300px' className="more">
                                    TÌM HIỂU THÊM
                                </Button>                    
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable
                              style={{ width: 340 }}
                              cover={<img alt="example" src="http://product.hstatic.net/1000075078/product/tra_dao_5f3925d9bfca4d0abc17f95b05fff5f7_large.jpg" />}>                           
                            <BrowserRouter>
                                <Link to="/" style={{color: 'inherit', float:'left',width: '100%'}}>TRÀ ĐÀO CAM SẢ</Link>
                            </BrowserRouter>
                            <p>45,000 đ</p> 
                            <Button  size='300px' className="buy">
                                    MUA NGAY
                                </Button>    
                                <Button  size='300px' className="more">
                                    TÌM HIỂU THÊM
                                </Button> 
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} className="menu">
                    <Col span={8}>
                        <Card hoverable
                              style={{ width: 340 }}
                              cover={<img alt="example" src="http://product.hstatic.net/1000075078/product/espressonong_f60fc6f25baa404c8a8bfc40c396f27e_large.jpg" />}>                           
                            <BrowserRouter>
                                <Link to="/" style={{color: 'inherit', float:'left',width: '100%'}}>ESPRESSO</Link>
                            </BrowserRouter>
                            <p>35,000 đ</p> 
                            <Button  size='300px' className="buy">
                                    MUA NGAY
                                </Button>    
                                <Button  size='300px' className="more">
                                    TÌM HIỂU THÊM
                                </Button> 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable
                              style={{ width: 340 }}    
                              cover={<img alt="example" src="http://product.hstatic.net/1000075078/product/caramel_macchiato_24ff98b746e84b7aba702c01a60b1a52_large.jpg" />}>
                            <BrowserRouter>
                                <Link to="/" style={{color: 'inherit', float:'left',width: '100%'}}>CARAMEL MACCHIATO</Link>
                            </BrowserRouter>
                            <div>55,000 đ</div>
                            <Button  size='300px' className="buy">
                                    MUA NGAY
                                </Button>    
                                <Button  size='300px' className="more">
                                    TÌM HIỂU THÊM
                                </Button> 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable
                              style={{ width: 340 }}
                              cover={<img alt="example" src="http://product.hstatic.net/1000075078/product/cappuccino_af58b143de7e4faeb9a3ce59b313c946_large.jpg" />}>
                            <BrowserRouter>
                                <Link to="/" style={{color: 'inherit', float:'left',width: '100%'}}>CAPPUCCINO</Link>
                            </BrowserRouter>
                            <p>45,000 đ</p> 
                            <Button  size='300px' className="buy">
                                    MUA NGAY
                                </Button>    
                                <Button  size='300px' className="more">
                                    TÌM HIỂU THÊM
                                </Button> 
                        </Card>
                    </Col>
                </Row>
            </div>        
        )
    }
}
export default Menu;