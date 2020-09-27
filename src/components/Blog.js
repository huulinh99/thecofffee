import React from 'react'
import { Card, Col, Row } from 'antd';
import {BrowserRouter} from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import '../stylesheet/Blog.css'
class Blog extends React.Component{
    render(){
        return(
            <div className="blog_home">
                <h2 className="section-heading-blog">BLOG</h2>               
                <div className="article_img">
                    <div className="article-item-info">                   
                        <p className="article-tags">TIN TỨC</p>
                        <h3 style={{textAlign :'left', marginLeft: '2%', fontSize: '24px'}}>CÙNG NHÀ THƯỞNG THỨC PHIM THE TALE OF CUỘI 2020 VÀ ĐÓN MÙA TRĂNG SUNG TÚC</h3>   
                        <p className='short-desc'>
                            Thời gian trôi qua, mỗi năm một khác, câu chuyện Trung Thu cũng vì thế mà khó được trọn vẹn như xưa, đặc biệt trong những ngày nhiều biến động,...
                        </p>
                        <Button  size='300px' className="buy" style={{height: '45px', marginLeft: '2%'}}>
                            XEM THÊM
                        </Button>                                 
                    </div>
                    <div className="blog-item">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card hoverable style={{height:500}}>     
                            <div style={{backgroundImage: 'url(http://file.hstatic.net/1000075078/article/banner_trang_chu1200x450_166da670f92148e496a55ff9fb462fa3_grande.jpg)'}} className="blog-item-img">                  
                                <p style={{color:'#EA8025',marginTop:'50%', fontSize:'16px',fontWeight:'700',marginLeft:'4.6%',float:'left',marginBottom:'1%'}}>TIN TỨC</p>
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', textAlign:'left',width: '100%', fontSize:'30px',marginLeft:'4.6%',paddingRight:'5.2%'}}>GÓI TIẾT KIỆM DÀNH CHO NGƯỜI YÊU TRÀ VÀ CÀ PHÊ - TIẾT KIỆM ĐẾN 160K</Link>
                                </BrowserRouter> 
                                <p style={{marginBottom:'10px',lineHeight:'24px',fontFamily:'Lato',color: '#000000', float:'left', width: '100%',textAlign:'left', fontSize:'14px',marginLeft:'4.6%',paddingRight:'5.2%'}}>
                                    Cùng Nhà khám phá Gói Tiết Kiệm "phiên bản nâng cấp" tại app The Coffee House để thưởng thức món yêu thích và tiết kiệm đến 160.000đ nha!Nhà hiểu rằng, một ngày...
                                </p>
                            </div>                                                                                                                                 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable style={{height: 500 }}>
                            <div style={{backgroundImage: 'url(http://file.hstatic.net/1000075078/article/c910c8f7df4923177a58_7fbb18d96d374eec80b3901ecf509d2b_grande.jpg)'}} className="blog-item-img">
                                <p style={{color:'#EA8025',marginTop:'50%', fontSize:'16px',fontWeight:'700',marginLeft:'4.6%',float:'left',marginBottom:'1%'}}>TIN TỨC</p>
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', width: '100%',textAlign:'left', fontSize:'30px',marginLeft:'4.6%',paddingRight:'5.2%'}}>KHÁM PHÁ "CUỘC PHIÊU LƯU" BÊN TRONG HỘP BÁNH TRUNG THU THE COFFEE HOUSE</Link>
                                </BrowserRouter> 
                                <p style={{marginBottom:'10px',lineHeight:'24px',fontFamily:'Lato',color: '#000000', float:'left', width: '100%',textAlign:'left', fontSize:'14px',marginLeft:'4.6%',paddingRight:'5.2%'}}>
                                    Không khí Trung Thu đã tràn ngập không gian Nhà. Hãy cùng Nhà khám phá cuộc phiêu lưu của chú Cuội phiên bản "xịn sò", đắm chìm trong sắc màu...
                                </p>
                            </div>                   
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable style={{ height: 500 }}>                           
                            <div style={{backgroundImage: 'url(http://file.hstatic.net/1000075078/article/kv_banner_blog_52e9457408524e4cbb9578c19586e5a0_grande.jpg)'}} className="blog-item-img">
                                <p style={{color:'#EA8025',marginTop:'50%', fontSize:'16px',fontWeight:'700',marginLeft:'4.6%',float:'left',marginBottom:'1%'}}>TIN TỨC</p>
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', width: '100%',textAlign:'left', fontSize:'30px',marginLeft:'4.6%',paddingRight:'5.2%',marginBottom:'4%'}}>THỬ VỊ TRUNG THU CÙNG BỘ SƯU TẬP "TRĂNG NHÀ SUNG TÚC"</Link>
                                </BrowserRouter> 
                                <p style={{marginBottom:'10px',lineHeight:'24px',fontFamily:'Lato',color: '#000000', float:'left', width: '100%',textAlign:'left', fontSize:'14px',marginLeft:'4.6%',paddingRight:'5.2%'}}>
                                    Sáng tạo là niềm đam mê Barista tại The Coffee House luôn theo đuổi. Mùa trăng tròn này, Nhà gửi đến bạn bộ sưu tập thức uống sáng tạo -...
                                </p>
                            </div> 
                        </Card>
                    </Col>
                </Row>
                    </div> 
                </div>                                       
            </div>                
        )
    }
}
export default Blog;