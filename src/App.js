import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import AboutCoffee from './pages/AboutCoffee';
import Product from './pages/Product';
import Order from './pages/Order';
import ViewCard from './pages/ViewCard';
function App() {
  return (   
    <Router>
      <div className="App">      
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/AboutCoffee" component={AboutCoffee}/>
        <Route path="/Product" component={Product}/>
        <Route path="/Order" component={Order}/>
        <Route path="/ViewCard" component={ViewCard}/>
      </Switch>
      </div>      
    </Router>     
  );
}

export default App;
