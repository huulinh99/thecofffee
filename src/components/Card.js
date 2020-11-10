import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { Layout, Menu, Card, Button } from 'antd';

class CardOrder extends React.Component {

    render() {      
        return (
            <div style={{width:'100%'}}>
                {this.props.productForOrder.length == 0 ? (<div>
                    <Button  type="primary" block style={{ marginTop: '30px', fontWeight: 'bold', backgroundColor: '#ea8025', color: '#fff', border: '1px solid transparent', paddingTop: '15px', paddingBottom: '37px' }}>
                        <Link to='/ViewCard' target='_blank'>
                            XEM GIỎ HÀNG
                        </Link>                      
                    </Button>
                </div>) : (
                        <div>
                            <Button type="primary" block style={{ marginTop: '30px', fontWeight: 'bold', backgroundColor: '#ea8025', color: '#fff', border: '1px solid transparent', paddingTop: '15px', paddingBottom: '37px' }}>
                                XEM GIỎ HÀNG
                            </Button>
                            {this.renderCard()}
                        </div>
                    )}
                    <div style={{marginTop:'30px'}}>
                        <p style={{marginTop: '0px',display:'inline',marginLeft:'30px'}}>Cộng({this.props.totalOrder})</p>
                        <p style={{marginTop: '0px', marginLeft:'267px',lineHeight: 1.5, fontSize:'16px',display:'inline'}}>{this.props.total}đ</p>
                    </div>
            </div>
        )
    }

    renderCard() {
        var tmp = [];
        this.props.productForOrder.map((product, i) => {
            tmp.push(
                <Card style={{ height: '70px', marginTop: '20px' }}>
                    <div>
                        <div style={{display:'inline'}}>
                            <span style={{marginLeft:'-290px', padding:' 0 10px', background:'#ea8025', lineHeight:'1.5', 
                            fontSize:'0.875rem', verticalAlign:'middle',whiteSpace:'nowrap',borderRadius:'2px', textTransform:'uppercase',color: '#ffffff'}}>{product.quantity}</span>
                        </div>
                        <div style={{display:'inline'}}>
                            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '-26px', 
                            marginLeft: '80px', fontFamily: 'Open Sans', lineHeight: 1.5 }}>{product.name}</p>
                            <p style={{marginTop: '-46px', marginLeft:'345px',lineHeight: 1.5, fontSize:'16px'}}>{product.price}đ</p>
                        </div>
                    </div>
                </Card>
            );
        })
        return tmp;
    }
}

export default CardOrder;