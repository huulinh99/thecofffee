import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SlideShow from './slideshow/SlideShow';
import Menu from './components/Menu';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <SlideShow/>      
        <Menu/>
        <Blog/>
    </div>
  );
}

export default App;
