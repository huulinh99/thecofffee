import React from 'react'
import { Layout, Menu, Modal, Button } from 'antd';
import { Row, Col, Card } from 'antd';
import { Form, Input, Checkbox } from 'antd';
import CardOrder from '../components/Card';
import '../stylesheet/ViewCard.css'
import Navbar from '../components/Navbar';
class ViewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout : {
                labelCol: {
                  span: 8,
                },
                wrapperCol: {
                  span: 16,
                },
              },
              tailLayout : {
                wrapperCol: {
                  offset: 8,
                  span: 16,
                },
              }
        }
    }  

    onFinish(values){
        console.log('Success:', values);
      };
    
    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="payment">
                <Navbar />
                <div>
                    <Row style={{ marginTop: '70px',height:'1000px' }}>
                        <Col span={15} style={{ backgroundColor: 'white',height: 'fit-content' }}>
                            <div>
                                <p className="uk-card-title">1. Xác nhận thông tin đơn hàng</p>
                            </div>
                            <Form
                                {...this.state.layout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                style={{marginLeft:'-300px'}}>
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your address!',
                                        },
                                    ]}
                               style={{height:'40px'}}>
                                    <Input style={{height:'40px'}} placeholder="Enter address for shipping"/>
                                </Form.Item>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input style={{width:'40%',marginLeft:'-480px', height:'40px'}} placeholder="Enter your name"/>
                                    
                                </Form.Item>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone!',
                                        },
                                    ]}
                                >
                                <Input style={{width:'40%',marginLeft:'-480px', height:'40px'}} placeholder="Enter your phone number"/>                                  
                                </Form.Item>
                                <Form.Item
                                    label="Note"
                                    name="note"                         
                               style={{height:'40px'}}>
                                    <Input style={{height:'40px'}} placeholder="Enter address your note"/>
                                </Form.Item>

                                <Form.Item {...this.state.tailLayout}>
                                    <Button type="primary" htmlType="submit" style={{margin: '0 auto'}}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8} style={{ backgroundColor: 'white', marginLeft: '57px' }}>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ViewCard;