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
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Undangan+Pernikahan+Jindul+%26+Iwak&dates=20260315T000000/20260315T235959&details=Undangan+Pernikahan+Jindul+%26+Iwak&location=RT05/RW02+Dusun+TukSongo%2C+Desa+Krandon+Lor%2C+Kec.+Suruh%2C+Kab.+Semarang%2C+Jawa+Tengah+50774"
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
