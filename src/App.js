import React from "react";
import './App.css';
import Header from './components/Header';
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";



function App() {
  return (
    <div>
      <Header />
         <ProductList />
        <ProductDetails />
    </div>
  );
}

export default App;
