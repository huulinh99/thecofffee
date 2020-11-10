import React from 'react';
import '../slideshow/SlideShow.css';
import { Carousel } from 'antd';
  
class SlideShow extends React.Component{

    render(){
        return(
            <Carousel autoplay className="slideshow">
                <div>
                    <img src="http://file.hstatic.net/1000075078/file/toc_banner_ab863be3f343493bb1acb416318cf98b_master.jpg" alt="dev" id="dev-pic" title="Magno"/>
                </div>
                <div className="pic2">
                <img src="http://file.hstatic.net/1000075078/file/kv_new_sori_web__a9d6c4916bb541d9a3af9c8c222f576f_master.jpg" alt="dev" id="dev-pic" title="Magno"/>
                </div>
                <div>
                    <img src="http://file.hstatic.net/1000075078/file/kv_banner_web_503b2f82483243de8c01b4c83ce877e2_master.jpg" alt="dev" id="dev-pic" title="Magno"/>
                </div>
            </Carousel>
        )
    }
}

export default SlideShow;