import React from 'react';
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../stylesheet/Navbar.css'
import AboutCoffee from '../pages/AboutCoffee';
import Product from '../pages/Product';
import Home from '../pages/Home';


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
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="Navbar">
        <Menu.Item key="story" className="SubMenu">
            <Link to="/Home" style={{color:'white'}}>brand story</Link>
        </Menu.Item>
        <Menu.Item key="coffestory" className="SubMenu">
            <Link to="/AboutCoffee" style={{color:'white'}}>about coffee</Link>
        </Menu.Item>
        <Menu.Item key="product" className="SubMenu">
            <Link to="/Product" style={{color:'white'}}>product</Link>
        </Menu.Item>
        <Menu.Item key="news" className="SubMenu">
          news
        </Menu.Item> 
      </Menu>    
    );
  }
}

export default Navbar;