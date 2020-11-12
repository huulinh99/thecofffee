import React from "react";
import { Card, Col, Row } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
import { withRouter, useHistory } from "react-router";
import { Button } from "antd";
import "../stylesheet/Menu.css";

class Menu extends React.Component {
  state = {
    loading: true,
    products: [],
  };

  async componentDidMount() {
    const url =
      "https://coffee-shop-api.azurewebsites.net/api/v1/category/9c7a418c-8347-4d77-9611-c7c8b99074e3/products";
    const respone = await fetch(url);
    const data = await respone.json();
    this.setState({
      products: data[0].product,
      loading: false,
    });
    console.log(data[0].product);
    console.log("test");
  }

  showProductDetail(productId) {
    console.log(this.props);
    this.props.history.push({
      pathname: `/products/${productId}`,
    });
  }

  render() {
    return (
      <div className="site-card-wrapper row">
        {this.state.loading || !this.state.products ? (
          <div>loading...</div>
        ) : (
          <div>
            <Row>
              <h2 className="section-heading">Menu</h2>
            </Row>
            <Row gutter={16} className="menu">
              {this.state.products.map((product, i) => {
                console.log("Entered");
                // Return the element. Also pass key
                return (
                  <div>
                    <Col
                      span={8}
                      style={{ paddingLeft: "35px", marginBottom: "30px" }}
                    >
                      <Card
                        hoverable
                        style={{ width: 360 }}
                        cover={
                          <img alt={product.description} src={product.photo} />
                        }
                      >
                        <BrowserRouter>
                          <h3
                            to="/"
                            className="product-name"
                            style={{ marginLeft: "10px" }}
                          >
                            {product.productNm}
                          </h3>
                        </BrowserRouter>
                        <div
                          className="product-price"
                          style={{ marginLeft: "10px" }}
                        >
                          {product.price} Đ
                        </div>
                        <Button
                          size="400px"
                          className="buy"
                          style={{ marginTop: "15px", marginLeft: "10px" }}
                        >
                          <Link
                            to="/Order"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            buy now
                          </Link>
                        </Button>
                        <Button
                          size="400px"
                          className="more"
                          style={{ marginTop: "15px" }}
                          onClick={() =>
                            this.showProductDetail(product.productId)
                          }
                        >
                          SEE MORE
                        </Button>
                      </Card>
                    </Col>
                  </div>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    );
  }
}
export default Menu;
