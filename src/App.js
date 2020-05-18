import React from 'react';
import {BrowserRouter as Router, Route, Switch   } from 'react-router-dom';


import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Restaurant_details from './components/sections/Restaurant_details';
import Itemlist from './components/sections/Items';
import Itemdetails from './components/sections/Itemdetails';
import Home from './components/sections/Home';
import About from './components/sections/About';
//import configureStore, { history } from './configureStore';

function App() {
  ///const {location} = useLocation();
  //console.log(window.location.pathname);
  return (
    <Router>
      
    <Header/>
    <Switch>
    <Route  path="/restaurant_details" component={Restaurant_details} />
    <Route  path="/itemlist" component={Itemlist} />
    <Route  path="/itemdetails" component={Itemdetails} />
    <Route  path="/home" component={Home} />
    <Route  path="/about" component={About} />
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
