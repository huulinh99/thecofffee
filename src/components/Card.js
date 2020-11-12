import React from "react";
import { CloseCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import { Layout, Menu, Card, Button, Row, Col } from "antd";

class CardOrder extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.props.productForOrder.length == 0 ? (
          <div>
            <Button
              type="primary"
              block
              style={{
                marginTop: "30px",
                fontWeight: "bold",
                backgroundColor: "#ea8025",
                color: "#fff",
                border: "1px solid transparent",
                paddingTop: "15px",
                paddingBottom: "37px",
              }}
            >
              <Link to="/ViewCart" target="_blank">
                VIEW CART
              </Link>
            </Button>
          </div>
        ) : (
            <div>
              <Button
                type="primary"
                block
                style={{
                  marginTop: "30px",
                  fontWeight: "bold",
                  backgroundColor: "#ea8025",
                  color: "#fff",
                  border: "1px solid transparent",
                  paddingTop: "15px",
                  paddingBottom: "37px",
                }}
              >
                <Link to="/ViewCart" target="_blank">
                  VIEW CART
              </Link>
              </Button>
              {this.renderCard()}
            </div>
          )}
        <div style={{ marginTop: "30px" }}>
          <p
            style={{ marginTop: "0px", display: "inline", marginLeft: "30px" }}
          >
            Cộng({this.getTotal()})
          </p>
          <p
            style={{
              marginTop: "0px",
              marginLeft: "267px",
              lineHeight: 1.5,
              fontSize: "16px",
              display: "inline",
            }}
          >
            {this.getTotalAmount()}đ
          </p>
        </div>
      </div>
    );
  }

  getTotal() {
    let totalOrder = 0;
    this.props.productForOrder.forEach((prod) => (totalOrder += prod.quantity));
    return totalOrder;
  }

  getTotalAmount() {
    let totalAmount = 0;
    this.props.productForOrder.forEach(
      (prod) => (totalAmount += prod.quantity * prod.price)
    );
    return totalAmount;
  }

  renderCard() {
    var tmp = [];
    this.props.productForOrder.map((product, i) => {
      tmp.push(
        <Card style={{ height: "70px", marginTop: "20px" }}>
          <Row justify="space-between">
            <Col span={4}>
              <div
                style={{ display: "inline" }}
                onClick={() => this.props.onClick(product)}
              >
                <span
                  style={{
                    padding: " 0 10px",
                    background: "#ea8025",
                    lineHeight: "1.5",
                    fontSize: "0.875rem",
                    verticalAlign: "middle",
                    whiteSpace: "nowrap",
                    borderRadius: "2px",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  {product.quantity}
                </span>
              </div>
            </Col>
            <Col>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Open Sans",
                  lineHeight: 1.5,
                }}
              >
                {product.name}
              </p>
            </Col>
            <Col span={4}>
              <p
                style={{
                  lineHeight: 1.5,
                  fontSize: "16px",
                }}
              >
                {product.price}đ
              </p>
            </Col>
            <Col span={2}>
              <CloseCircleOutlined
                onClick={() =>
                  this.props.onDelete && this.props.onDelete(product)
                }
                style={{ background: "#ea8025", color: "#ffffff" }}
              />
            </Col>
          </Row>
        </Card>
      );
    });
    return tmp;
  }
}

export default CardOrder;
