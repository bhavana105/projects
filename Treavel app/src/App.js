import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import {Info}  from "./components/data"
import { useState } from "react";

import { Main } from "./components/main";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
const [Data] = useState(Info)  
return (
    <div>
      <Navbar/>
      <Home/>
      <Main Data = {Data} />
     
      <Footer/>
    </div>
  );
}

export default App;
