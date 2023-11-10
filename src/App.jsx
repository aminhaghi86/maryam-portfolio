import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
