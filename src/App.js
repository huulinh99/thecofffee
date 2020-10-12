import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutCoffee from './pages/AboutCoffee';
import News from './pages/News';

function App() {
  return (   
    <BrowserRouter>
      <div className="App">
        <Navbar />   
        <Route path='/Home' component={Home}/>  
        <Route path='/AboutCoffee' component={AboutCoffee}/>
        <Route path='/News' component={News}/>
      </div>
    </BrowserRouter>     
  );
}

export default App;
