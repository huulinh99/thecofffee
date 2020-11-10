import React from 'react'
import Product from './Product'
import '../stylesheet/ProductDetail.css'
import Navbar from '../components/Navbar';
class ProductDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            productId: this.props.idForShowDetail,
            productsInfo: {}
        }
    }  

    async componentDidMount(){
        console.log('product id ne' + this.state.productId);
        const url = `https://localhost:44362/api/v1/Products/${this.state.productId}`;
        const respone = await fetch(url);
        const data = await respone.json();
        this.setState({
            productsInfo : data,
            loading: false
        })
        console.log(this.state.productsInfo);
        console.log(this.state.productsInfo.productNm);
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="product-detail-image">
                    <img src="//product.hstatic.net/1000075078/product/espressonong_f60fc6f25baa404c8a8bfc40c396f27e_master.jpg" />
                </div>
                <div className="product-detail-description">
                    <h1 className="info-product-title">TRÀ SA MC CA TRÂN CHÂU TRNG</h1>
                    <p className="product-detail-short-des">Một cốc Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng,
                    phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và
                         sánh đặc. Để đạt được sự kết hợp này, chúng tôi xay tươi hạt cà phê cho mỗi lần pha.</p>
                    <p style={{ textAlign: 'left',marginLeft: '100px',color:'#EA8025',fontSize:'24px',fontFamily:'Bebas Neue'}}>35000Đ</p>
                    <button style={{backgroundColor:'#EA8025', color:'#fff',padding:'15px 30px', fontWeight:'700',
                     fontSize:'18px',width:'30%',fontFamily:'Bebas Neue',border:'none',marginLeft:'-255px'}}>BUY NOW</button>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;