import React from 'react';
import { Menu } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';

import '../stylesheet/Navbar.css'
//import AboutCoffee from '../pages/AboutCoffee';
//import Product from '../pages/Product';


class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <BrowserRouter>
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="Navbar">
        <Menu.Item key="story" className="SubMenu">
            <a href="/Home" style={{color:'white'}}>CÂU CHUYỆN THƯƠNG HIỆU</a>
        </Menu.Item>
        <Menu.Item key="coffestory" className="SubMenu">
            <a href="/AboutCoffee" style={{color:'white'}}>CHUYỆN CÀ PHÊ</a>
        </Menu.Item>
        <Menu.Item key="product1" className="SubMenu">
            <a href="/Product" style={{color:'white'}}>SẢN PHẨM</a>
        </Menu.Item>
        <Menu.Item key="endow" className="SubMenu">
          ƯU ĐÃI THÀNH VIÊN
        </Menu.Item>
        <Menu.Item key="news" className="SubMenu">
          TIN TỨC
        </Menu.Item>
        <Menu.Item key="hiring" className="SubMenu">
          TUYỂN DỤNG
        </Menu.Item>
        <Menu.Item key="store" className="SubMenu">
          CỬA HÀNG
        </Menu.Item>        
      </Menu>
      </BrowserRouter>
    );
  }
}

export default Navbar;