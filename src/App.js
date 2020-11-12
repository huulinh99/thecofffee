import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch,useRouteMatch,useParams } from 'react-router-dom';
import Navbar from './components/Navbar'
import AboutCoffee from './pages/AboutCoffee';
import Product from './pages/Product';
import Login from './pages/Login';
import Order from './pages/Order';
import ViewCart from './pages/ViewCart';
import firebase from 'firebase';
import firebaseConfig from "./services/firebase.config";
import ProductDetail from './pages/ProductDetail';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  return (   
    <Router>
      <div className="App">      
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/AboutCoffee" component={AboutCoffee}/>
        <Route path="/Product" component={Product}/>
        <Route path="/Order" component={Order}/>
        <Route path="/ViewCart" component={ViewCart}/>
        <Route path="/Login" component={Login}/>
        <Route path='/products/:productId' render={(props) => {
                    return ( <ProductDetail {...props } /> )
                }}/>
      </Switch>
      </div>      
    </Router>     
  );
}

export default App;
