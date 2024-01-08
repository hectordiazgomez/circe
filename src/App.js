import React, {useState, useEffect} from "react"
import Home from "./components/home";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {

useEffect(() => {
  document.title = "Yumi"
})

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
