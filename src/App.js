// RFCE for basic syntax

import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";

const HomeComponents = () => {
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}
const CheckoutComponents = () => {
  return (
    <>
      <Header/>
      <Checkout/>
    </>
  );
}

const LoginComponents = () => {
  return(
  <>
  <Login/>
  </>
    )
}

const App = ()=> {
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<HomeComponents />} />
            <Route path="/checkout" element={<CheckoutComponents />} />  
            <Route path="/login" element={<LoginComponents />} />  
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
