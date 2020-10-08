import React from 'react';
import '../stylesheet/AboutCoffee.css'
import { Row, Col } from 'antd';
import Navbar from '../components/Navbar';
class AboutCoffee extends React.Component{
    render(){
        return(          
            <div class="brand-story">
                <Navbar/>
                <h1 className='brand-story-title' style={{fontFamily:'Bebas Neue',fontSize:'40px',marginLeft:'-4%',marginTop:'-6%',color:'#EA8025'}}>MÌNH CÀ PHÊ NHÉ</h1>
                <div className="brand-story-content">
                    <p>“Cà phê nhé" - Một lời hẹn rất riêng của người Việt. Một lời ngỏ mộc mạc để mình ngồi lại bên nhau và sẻ chia câu chuyện của riêng mình.</p>
                    <p>Tại The Coffee House, chúng tôi luôn trân trọng những câu chuyện và đề cao giá trị <span style={{fontWeight:'bold'}}>Kết nối con người</span>. Chúng tôi mong muốn The Coffee House sẽ trở thành <span style={{fontWeight:'bold'}}>“Nhà Cà Phê"</span>, nơi mọi người xích lại gần nhau và tìm thấy niềm vui, sự sẻ chia thân tình bên những tách cà phê đượm hương, chất lượng.</p>
                </div>        
                <div>
                    <p className="block-brand-story-title" style={{fontFamily:'Bebas Neue',fontSize:'40px',marginLeft:'-4%',color:'#EA8025'}}>4 GIÁ TRỊ LÀM NÊN THE COFFEE HOUSE</p>
                </div>       
                <div>
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <img src="http://file.hstatic.net/1000075078/file/img_2314.jpg" className="brand-story-image" alt='this is brand story'/>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{marginLeft:'3%'}}>
                            <img src="http://file.hstatic.net/1000075078/file/img_3017.jpg" className="brand-story-image" alt='this is brand story'/>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <div>
                                <h3 className="block-brand-story-row-content" style={{marginLeft:'-118%'}}>CHÂN THÀNH</h3>
                                <p style={{marginBottom: 0,fontSize: '16px',lineHeight: '24px',textAlign:'left', marginLeft:'-72.5px',marginTop:'-2.2%'}}>Bắt đầu từ sứ mệnh “Deliver Happiness” - Trao gửi hạnh phúc, chúng tôi tin rằng khi làm việc với tất cả sự chân thành và tôn trọng những giá trị nguyên bản của từng nhân viên cũng như khách hàng, tất cả mọi người đến với The Coffee House đều nhận được những niềm vui nho nhỏ, được tốt lên và làm người khác tốt lên từng ngày.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'30px'}}>
                        <Col span={12}>
                            <div>
                                <h3 style={{marginLeft:'-55.7%',marginTop:'17%'}} className="block-brand-story-row-content">QUAN TÂM</h3>
                                <p style={{marginBottom: 0,fontSize: '16px',lineHeight: '24px',textAlign:'left',marginLeft:'16.4%', marginTop:'-2.2%', maxWidth:'50%'}}>Mỗi sản phẩm, chiến dịch của The Coffee House luôn xoay quanh con người. Chúng tôi lấy khách hàng, nhân viên và cộng đồng làm trọng tâm cho mọi quyết định. Vì khi có bạn, The Coffee House được tiếp thêm sức mạnh để cùng lan toả những giá trị tốt đẹp cho người trẻ Việt Nam.</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <img src="http://file.hstatic.net/1000075078/file/_dsc7884_78d1c8fdf88c4062aa9a86e2d88a87f8.jpg" className="brand-story-image-2" alt='this is brand story'/> 
                        </Col>
                    </Row>
                    <Row style={{marginTop:'30px'}}>
                        <Col span={12}>
                            <img src="http://file.hstatic.net/1000075078/file/img_2981.jpg" className="brand-story-image-3" alt='this is brand story'/> 
                        </Col>
                        <Col span={12}>
                            <div>
                                <h3 style={{marginLeft:'-27%',marginTop:'17%'}} className="block-brand-story-row-content">SÁNG TẠO</h3>
                                <p style={{marginBottom: 0,fontSize: '16px',lineHeight: '24px',textAlign:'left',marginLeft:'30.4%', marginTop:'-2.2%', maxWidth:'50%'}}>Chúng tôi muốn tạo ra dấu ấn khác biệt cho cà phê Việt Nam bằng sự tử tế và cẩn trọng. 5 năm qua, cảm ơn bạn là nguồn động lực giúp chúng tôi nỗ lực đổi mới và kiến tạo mỗi ngày, để mang lại những thành phẩm tuyệt vời nhất, để trải nghiệm của bạn ngày một tốt hơn.</p>
                            </div>
                        </Col>                        
                    </Row>
                </div>
            </div>            
        )
    }
}

export default AboutCoffee;