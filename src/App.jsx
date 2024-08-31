import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeCard from "./components/Welcome";
import Home from "./Pages/Home";
import Couple from "./Pages/Couple";
import Date from "./Pages/Date";
import Gallery from "./Pages/Gallery";
import Greetings from "./Pages/Greetings";

import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/couple" element={<Couple />} />
        <Route path="/date" element={<Date />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>

      {/* <Navbar /> */}
    </BrowserRouter>
  );
};

export default App;
