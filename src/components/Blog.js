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
                        <p className="article-tags">news</p>
                        <h3 style={{textAlign :'left', marginLeft: '2%', fontSize: '24px', fontFamily:'Bebas Neue' }}>ENJOY WITH THE TALE OF THE 2020 FESTIVALS AND VILLAGE SEASON</h3>   
                        <p className='short-desc'>
                            As time goes by, each year differs from year to year, the story of the Mid-Autumn Festival is also difficult to complete as before, especially in turbulent days, ...
                        </p>
                        <Button  size='300px' className="see-more-desc" style={{height: '37px', marginLeft: '2%'}}>
                            SEE MORE
                        </Button>                                 
                    </div>
                    <div className="blog-item">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card hoverable style={{height:500}}>     
                            <div style={{backgroundImage: 'url(http://file.hstatic.net/1000075078/article/banner_trang_chu1200x450_166da670f92148e496a55ff9fb462fa3_grande.jpg)'}} className="blog-item-img">                  
                                <p style={{color:'#EA8025',marginTop:'50%', fontSize:'16px',fontWeight:'700',fontFamily: 'Bebas Neue',marginLeft:'4.6%',float:'left',marginBottom:'1%'}}>news</p>
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', textAlign:'left',width: '100%',fontFamily:'Bebas Neue', fontSize:'30px',marginLeft:'4.6%',paddingRight:'5.2%'}}>SAVING PACKAGE FOR TEA AND COFFEE Lover - Save up to 160K</Link>
                                </BrowserRouter> 
                                <p style={{marginBottom:'10px',lineHeight:'24px',fontFamily:'Lato',color: '#000000', float:'left', width: '100%',textAlign:'left', fontSize:'14px',marginLeft:'4.6%',paddingRight:'5.2%'}}>
                                Discover the Saving Package "upgraded version" at The Coffee House app to enjoy your favorite food and save up to 160,000 VND!
                                </p>
                                <Button  size='400px' className="see-more">
                                    SEE MORE
                                </Button>  
                            </div>                                                                                                                                 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable style={{height: 500 }}>
                            <div style={{backgroundImage: 'url(http://file.hstatic.net/1000075078/article/c910c8f7df4923177a58_7fbb18d96d374eec80b3901ecf509d2b_grande.jpg)'}} className="blog-item-img">
                                <p style={{color:'#EA8025',marginTop:'50%', fontSize:'16px',fontWeight:'700', fontFamily: 'Bebas Neue', marginLeft:'4.6%',float:'left',marginBottom:'1%'}}>news</p>
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', width: '100%',textAlign:'left', fontFamily:'Bebas Neue',fontSize:'30px',marginLeft:'4.6%',paddingRight:'5.2%'}}>EXPLORE "THE ADVENTURE" IN THE MIDDLE COOKING BOX </Link>
                                </BrowserRouter> 
                                <p style={{marginBottom:'10px',lineHeight:'24px',fontFamily:'Lato',color: '#000000', float:'left', width: '100%',textAlign:'left', fontSize:'14px',marginLeft:'4.6%',paddingRight:'5.2%'}}>
                                Mid-Autumn atmosphere has filled the space of the House. Let's explore the adventures of Uncle Cuoi "genuine" version, immersed in color ...
                                </p>
                                <Button  size='400px' className="see-more">
                                    SEE MORE
                                </Button> 
                            </div>                   
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable style={{ height: 500 }}>                           
                            <div style={{backgroundImage: 'url(http://file.hstatic.net/1000075078/article/kv_banner_blog_52e9457408524e4cbb9578c19586e5a0_grande.jpg)'}} className="blog-item-img">
                                <p style={{color:'#EA8025',marginTop:'50%', fontSize:'16px',fontWeight:'700' ,fontFamily: 'Bebas Neue',marginLeft:'4.6%',float:'left',marginBottom:'1%'}}>news</p>
                                <BrowserRouter>
                                    <Link to="/" style={{color: 'inherit', float:'left', width: '100%',textAlign:'left', fontFamily:'Bebas Neue',fontSize:'30px',marginLeft:'4.6%',paddingRight:'5.2%'}}>EXPERIENCE THE MEDIA WITH BUILDING COLLECTION</Link>
                                </BrowserRouter> 
                                <p style={{marginBottom:'10px',lineHeight:'24px',fontFamily:'Lato',color: '#000000', float:'left', width: '100%',textAlign:'left', fontSize:'14px',marginLeft:'4.6%',paddingRight:'5.2%'}}>
                                Creativity is the passion that Barista at The Coffee House always pursues. This full moon, Home sends you a creative drink collection -...
                                </p>
                                <Button  size='400px' className="see-more">
                                    SEE MORE
                                </Button> 
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