import React from "react";
import "../stylesheet/Order.css";
import { Layout, Menu, Modal, Button } from "antd";
import { Row, Col, Card } from "antd";
import Navbar from "../components/Navbar";
import CardOrder from "../components/Card";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modal1Visible: false,
      categories: [],
      products: [],
      productForOrder: [],
      eachProduct: {
        id: "",
        name: "",
        price: 0,
        quantity: 0,
      },
      total: 0,
      totalOrder: 0,
      currentProduct: {},
      quantity: 1,
      price: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    Promise.all([
      fetch("https://coffee-shop-api.azurewebsites.net/api/v1/category"),
      fetch("https://coffee-shop-api.azurewebsites.net/api/v1/Products"),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          categories: data1,
          products: data2,
          loading: false,
        })
      )
      .then(() => {
        const cart = JSON.parse(localStorage.getItem("CART"));
        this.setState({ ...cart });
      });
  }

  setModalVisibleAndProduct(modal1Visible, productDetail) {
    this.setState({
      modal1Visible,
      currentProduct: productDetail,
      loading: false,
    });
  }
  setModal1ForCancel(modal1Visible) {
    this.setState({
      modal1Visible,
    });
  }

  setModal1ForOK(modal1Visible) {
    var found = false;
    this.setState({
      modal1Visible,
    });

    var tmp;

    let isExist = this.state.productForOrder.some((prod) => {
      return prod.productId == this.state.currentProduct.productId;
    });
    debugger;
    const newProductFOrORder = this.state.productForOrder.map((product, i) => {
      if (product.productId == this.state.currentProduct.productId) {
        product.quantity = +this.state.quantity;
      }
      return product;
    });
    if (!isExist) {
      newProductFOrORder.push({
        productId: this.state.currentProduct.productId,
        name: this.state.currentProduct.productNm,
        price: this.state.currentProduct.price,
        quantity: this.state.quantity,
      });
    }

    this.setState({ productForOrder: newProductFOrORder });

    this.state.total += this.state.currentProduct.price * this.state.quantity;
    let totalOrder = 0;
    debugger;
    this.state.productForOrder.forEach((prod) => {
      totalOrder += prod.quantity;
    });

    this.setState({ quantity: 1, totalOrder });
    localStorage.setItem(
      "CART",
      JSON.stringify({
        productForOrder: this.state.productForOrder,
        total: this.state.total,
        totalOrder: this.state.totalOrder,
      })
    );
    console.log(this.state.total);
  }

  handleChange(event) {
    var quantityValue = parseInt(event.target.value);
    this.setState({ quantity: quantityValue });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Modal
          title="20px to Top"
          style={{ top: 70 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1ForOK(false)}
          onCancel={() => this.setModal1ForCancel(false)}
        >
          {this.state.loading || !this.state.currentProduct ? (
            <div>loading....</div>
          ) : (
            <div>
              <img
                src={this.state.currentProduct.photoForOrder}
                style={{
                  width: "85px",
                  height: "72px",
                  marginLeft: "5px",
                  display: "inline-block",
                }}
              />
              <div>
                <p
                  style={{
                    marginLeft: "110px",
                    marginTop: "-75px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {this.state.currentProduct.productNm}
                </p>
                <p
                  style={{
                    marginLeft: "110px",
                    marginTop: "-10px",
                    fontSize: "16px",
                  }}
                >
                  {this.state.currentProduct.price}
                </p>
                <input
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  placeholder="Enter quantity"
                  style={{
                    marginLeft: "110px",
                    marginTop: "-120px",
                    width: "50%",
                  }}
                />
              </div>
            </div>
          )}
        </Modal>
        <div className="product-for-order">
          <Row style={{ marginTop: "100px" }}>
            <Col span={6}>
              <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
              >
                <Menu theme="white" mode="inline">
                  {this.renderCate()}
                </Menu>
              </Menu>
            </Col>
            <Col span={11} style={{ marginLeft: "-60px" }}>
              {this.renderProduct()}
            </Col>
            <Col
              span={7}
              style={{
                background: "white",
                marginLeft: "32px",
                height: "fit-content",
                marginTop: "30px",
                display: "flex",
              }}
            >
              <CardOrder
                onClick={(prod) => {
                  debugger;
                  this.setState({
                    currentProduct: prod,
                  });
                  this.setModalVisibleAndProduct(true, prod);
                }}
                totalOrder={this.state.totalOrder}
                total={this.state.total}
                productForOrder={this.state.productForOrder}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  // fhf(){
  //     console.log("test function");
  // }
  renderCate() {
    var tmp = [];
    this.state.categories.map((category, i) => {
      tmp.push(<Menu.Item icon={null}>{category.categoryNm}</Menu.Item>);
    });
    return tmp;
  }

  renderProduct() {
    var tmp = [];
    this.state.products.map((product, i) => {
      tmp.push(
        <Card
          style={{ width: "100%", paddingBottom: "0px" }}
          className="order-card"
        >
          <div style={{ display: "flex", marginTop: "-10px" }}>
            <div className="uk-first-column">
              <img
                src={product.photoForOrder}
                style={{ width: "85px", height: "72px", marginLeft: "15px" }}
              />
            </div>
            <div style={{ marginLeft: "20px", textAlign: "left" }}>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginTop: "-5px",
                }}
              >
                {product.productNm}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.4,
                  color: "#999",
                  marginTop: "-17px",
                }}
              >
                {product.description}
              </p>
              <p
                style={{
                  marginBottom: "-14px",
                  fontSize: "16px",
                  marginTop: "-10px",
                }}
              >
                {product.price} đ
              </p>
              <div className="uk-position-bottom-right">
                <span
                  uk-icon="icon: plus-circle; ratio: 1.5"
                  className="uk-text-primary uk-icon"
                  style={{ marginLeft: "450px" }}
                  onClick={() => this.setModalVisibleAndProduct(true, product)}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      fill="none"
                      stroke="#000"
                      stroke-width="1.1"
                      cx="9.5"
                      cy="9.5"
                      r="9"
                      style={{ color: "#ea8025 !important" }}
                    ></circle>
                    <line
                      fill="none"
                      stroke="#000"
                      x1="9.5"
                      y1="5"
                      x2="9.5"
                      y2="14"
                      style={{ color: "#ea8025 !important" }}
                    ></line>
                    <line
                      fill="none"
                      stroke="#000"
                      x1="5"
                      y1="9.5"
                      x2="14"
                      y2="9.5"
                      style={{ color: "#ea8025 !important" }}
                    ></line>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Card>
      );
    });
    return tmp;
  }
}
export default Order;
