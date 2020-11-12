import React from "react";
import { Layout, Menu, Modal, Button, Spin, message, notification } from "antd";
import { Row, Col, Card } from "antd";
import { Form, Input, Checkbox } from "antd";
import CardOrder from "../components/Card";
import "../stylesheet/ViewCard.css";
import Navbar from "../components/Navbar";
import Axios from "axios";

const getTotalAmount = (productForOrder) => {
  let totalAmount = 0;
  productForOrder.forEach(
    (prod) => (totalAmount += prod.quantity * prod.price)
  );
  return totalAmount;
};
class ViewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      },
      tailLayout: {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      },
      cart: null,
    };
  }

  onFinish = async (userInfo) => {
    console.log("this.props", this.props);
    console.log(this.props);
    // check user is logged in
    let user = JSON.parse(localStorage.getItem("USER"));
    if (user == null) {
      message.error("Chưa đăng nhập");
      this.props.history.replace("/login");
      return;
    }

    console.log("Success:", userInfo);
    let cart = await JSON.parse(localStorage.getItem("CART"));
    let total = getTotalAmount(cart.productForOrder);
    let requestBody = {
      ...userInfo,
      orderDetail: cart.productForOrder,
      total,
    };
    console.log("requestBody", requestBody);

    Axios.post(
      "https://coffee-shop-api.azurewebsites.net/api/v1/order",
      requestBody,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => {
        if (res.status === 201) {
          notification.success({ message: "Tạo order thành công" });
        } else {
          console.log("ERROR");
          notification.error({ message: "Có gì đó không đúng" });
        }
      })
      .catch((err) => {
        notification.error({
          message: "Có gì đó không đúng",
          description: err.message,
        });
      });
  };

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  componentDidMount() {
    // get from localStorage
    const cart = JSON.parse(localStorage.getItem("CART"));
    this.setState({ cart });
  }

  handleCheckout() {
    // form
  }

  render() {
    return (
      <div className="payment" style={{ paddingTop: "150px" }}>
        <Navbar />
        <div>
          <Row style={{ marginTop: "70px", height: "1000px" }}>
            <Col
              span={15}
              style={{ backgroundColor: "white", height: "fit-content" }}
            >
              <div>
                <p className="uk-card-title">1. Xác nhận thông tin đơn hàng</p>
              </div>
              <Form
                {...this.state.layout}
                name="basic"
                onFinish={this.onFinish}
                initialValues={{
                  remember: true,
                }}
                style={{ marginLeft: "-300px" }}
              >
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                  style={{ height: "40px" }}
                >
                  <Input
                    style={{ height: "40px" }}
                    placeholder="Enter address for shipping"
                  />
                </Form.Item>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "40%",
                      marginLeft: "-480px",
                      height: "40px",
                    }}
                    placeholder="Enter your name"
                  />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "40%",
                      marginLeft: "-480px",
                      height: "40px",
                    }}
                    placeholder="Enter your phone number"
                  />
                </Form.Item>
                <Form.Item label="Note" name="note" style={{ height: "40px" }}>
                  <Input
                    style={{ height: "40px" }}
                    placeholder="Enter address your note"
                  />
                </Form.Item>

                <Form.Item {...this.state.tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ margin: "0 auto" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col
              span={8}
              style={{
                backgroundColor: "white",
                marginLeft: "57px",
                display: "flex",
                height: "fit-content",
              }}
            >
              {this.state.cart !== null ? (
                <CardOrder {...this.state.cart} />
              ) : (
                <Spin />
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ViewCard;
