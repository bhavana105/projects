import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.css';
import Mobileapp from './components/mobileapp/mobileapp'

import Footer from './components/footer/footer'
import './App.css'

 import Credentials from './components/credentials/Credentials'
 import Cart from'./components/cart/Cart';
import { useState } from "react";
import { Routes,Route } from "react-router-dom";

function App() {
  const[showsign,setShowSign]= useState(false);


  return (
    <>
{
  showsign?<Credentials setShowSign={setShowSign} />:<></>
}
  
    <Navbar setShowSign={setShowSign} /> 
    <Routes>
      <Route path="/"  element={<Home/>}/> 
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    <Mobileapp/>
    <Footer/>
    </>
  )
}

export default App
