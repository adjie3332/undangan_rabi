import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeCard from "./components/Welcome";
import Home from "./Pages/Home";
import Couple from "./Pages/Couple";
import Date from "./Pages/Date";
import Gallery from "./Pages/Gallery";
import Greetings from "./Pages/Greetings";

import Navbar from "./components/Navbar";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import backgroundMusic from "./assets/music/musrik.mp3";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Memutar musik saat komponen pertama kali dimuat
    audioRef.current.play();
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <BrowserRouter>
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop />

      <button
        type="button"
        id="button-music"
        style={{ display: "block" }}
        className="btn rounded-circle btn-music"
        onClick={toggleMusic}
        data-status={isPlaying}
        data-url={backgroundMusic}
      >
        <FontAwesomeIcon
          icon={isPlaying ? faCirclePause : faCirclePlay}
          className="spin-button"
        />
      </button>

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
