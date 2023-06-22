import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Overview />
      <Services />
      <WhyUs />
      <Contact />
    </>
  );
}

export default App;
