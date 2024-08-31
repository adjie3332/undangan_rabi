import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/img/married.png"; // Pastikan path ini benar

const Home = () => {
  const handleImageClick = () => {
    console.log("Image clicked");
    // Implementasikan logika tambahan jika diperlukan
  };

  return (
    <>
      <section
        className="p-0 m-0"
        style={{
          // backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center pt-4 pb-0 px-0 m-0 bg-cover-black">
          <h1
            className="font-esthetic my-4 fw-medium"
            style={{ fontSize: "2.5rem" }}
          >
            Undangan Pernikahan
          </h1>

          <div className="py-4">
            <div className="img-crop border border-3 border-light shadow mx-auto">
              <img src={bgImage} alt="bg" onClick={handleImageClick} />
            </div>
          </div>

          <h2 className="font-esthetic my-4" style={{ fontSize: "3rem" }}>
            Jindul &amp; Iwak
          </h2>
          <p className="mb-0" style={{ fontSize: "1.5rem" }}>
            Rabu, 15 Maret 2026
          </p>

          <a
            className="btn btn-light btn-sm shadow rounded-pill px-3 my-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Wahyu%20and%20Riski&details=The%20Wedding%20of%20Wahyu%20and%20Riski%20%7C%2015%20Maret%202023%20%7C%20RT%2010%20RW%2002,%20Desa%20Pajerukan,%20Kec.%20Kalibagor,%20Kab.%20Banyumas,%20Jawa%20Tengah%2053191%20%7C%2010.00%20-%2011.00%20WIB&dates=20230315T100000/20230315T110000&location=https://goo.gl/maps/ALZR6FJZU3kxVwN86"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
            Save The Date
          </a>

          <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
            <div className="mouse-animation border border-2">
              <div className="scroll-animation"></div>
            </div>
          </div>

          <p className="m-0 p-0">Scroll Down</p>
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default Home;
