import React from 'react';
import { Menu } from 'antd';
import '../stylesheet/Navbar.css'

const { SubMenu } = Menu;

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
        <SubMenu key="story" title="câu chuyện thương hiệu" className="SubMenu">
            <Menu.Item key="story:1">VỀ THE COFFEE HOUSE</Menu.Item>
            <Menu.Item key="story:2">TRÁCH NHIỆM CỘNG ĐỒNG</Menu.Item>
            <Menu.Item key="story:3">THÔNG CÁO BÁO CHÍ</Menu.Item>
        </SubMenu>
        <SubMenu key="coffestory"  title="CHUYỆN CÀ PHÊ" className="SubMenu">
            <Menu.Item key="coffestory:1">HÀNH TRÌNH TỪ NÔNG TRẠI ĐẾN LY CÀ PHÊ</Menu.Item>
            <Menu.Item key="coffestory:2">HẠT CÀ PHÊ THE COFFEE HOUSE</Menu.Item>
            <Menu.Item key="coffestory:3">NGHỆ THUẬT PHA CHẾ</Menu.Item>
            <Menu.Item key="coffestory:4">WORKSHOP COFFEE</Menu.Item>
            <Menu.Item key="coffestory:5">TRUY XUẤT NGUỒN GỐC</Menu.Item>
        </SubMenu>
        <Menu.Item key="product" className="SubMenu" style={{textTransform:'uppercase'}}>
          sản phẩm
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
    );
  }
}

export default Navbar;