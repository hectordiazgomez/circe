import React, {useState, useEffect} from "react"
import Home from "./components/home";
import Footer from "./components/footer";
import Header from "./components/header";
import Policy from "./components/policy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

useEffect(() => {
  document.title = "Yumi"
})

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/policy" element={<Policy />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
