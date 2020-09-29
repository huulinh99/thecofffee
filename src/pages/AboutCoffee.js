import React from 'react';
import '../stylesheet/AboutCoffee.css'
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
                    <p className="block-brand-story-title" style={{fontFamily:'Bebas Neue',fontSize:'40px',marginLeft:'-4%',marginTop:'13%',color:'#EA8025'}}>4 GIÁ TRỊ LÀM NÊN THE COFFEE HOUSE</p>
                </div>          
            </div>
        )
    }
}

export default AboutCoffee;