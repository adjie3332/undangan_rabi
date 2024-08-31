import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import WelcomeCard from "./components/Welcome";
import Home from "./Pages/Home";
import Couple from "./Pages/Couple";
import Date from "./Pages/Date";
import Gallery from "./Pages/Gallery";
import Greetings from "./Pages/Greetings";
import "./App.css";

import backgroundMusic from "./assets/music/musrik.mp3";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const attemptPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Autoplay error:", error);
      }
    };

    attemptPlay();

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback error:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <BrowserRouter>
      <audio ref={audioRef} src={backgroundMusic} loop />

      <button
        type="button"
        id="button-music"
        style={{ display: "block" }}
        className="btn rounded-circle btn-music"
        onClick={toggleMusic}
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
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
    </BrowserRouter>
  );
};

export default App;
