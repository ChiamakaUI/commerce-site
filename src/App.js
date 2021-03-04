import React from "react";
import './App.css';
import { Redirect, Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";



function App() {
  return (
    <div>
      <Header />
         <ProductList />
        <ProductDetails />
      <Switch>
        <Redirect 
          exact 
          from="/" 
          to={
            {
              pathname:"/facemasks"
            }
          }
        />
        <Route exact path="/facemasks" component={ProductList}/>
        <Route exact path="/facemasks/:id" component={ProductDetails}/>
      </Switch>
    </div>
  );
}
