import React from 'react';
import '../stylesheet/Home.css';
import Navbar from '../components/Navbar';
import SlideShow from '../slideshow/SlideShow';
import Menu from '../components/Menu';
import Blog from '../components/Blog'

function Home(props) {
  return (   
      <div className="Home">
        <Navbar/>     
        <SlideShow/>      
        <Menu {...props}/>
        <Blog/>
      </div>
  );
}

export default Home;
