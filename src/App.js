import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </HashRouter>
      {/* <Homepage /> */}
      <Footer />
    </div>
  );
}

export default App;
