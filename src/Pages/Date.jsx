import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
// import "antd/dist/reset.css"; // Pastikan Anda mengimpor stylesheet Ant Design

const Date = () => {
  return (
    <>
      <section
        className="dark-section"
        id="wedding-date"
        style={{ paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="font-esthetic py-3" style={{ fontSize: "2rem" }}>
              Waktu Menuju Acara
            </h2>

            <div className="border rounded-pill shadow py-2 px-4 mx-2 mb-4">
              {/* Ganti waktunya pada data-waktu (sesuai format tersebut) */}
              <div
                className="row justify-content-center"
                data-time="2024-01-01 00:00:00"
                id="count-down"
              >
                <div className="col-3 p-1">
                  <h2 className="d-inline m-0 p-0" id="day">
                    0
                  </h2>
                  <small className="ms-1 me-0 my-0 p-0 d-inline">Hari</small>
                </div>
                <div className="col-3 p-1">
                  <h2 className="d-inline m-0 p-0" id="hour">
                    0
                  </h2>
                  <small className="ms-1 me-0 my-0 p-0 d-inline">Jam</small>
                </div>
                <div className="col-3 p-1">
                  <h2 className="d-inline m-0 p-0" id="minute">
                    0
                  </h2>
                  <small className="ms-1 me-0 my-0 p-0 d-inline">Menit</small>
                </div>
                <div className="col-3 p-1">
                  <h2 className="d-inline m-0 p-0" id="second">
                    0
                  </h2>
                  <small className="ms-1 me-0 my-0 p-0 d-inline">Detik</small>
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem" }} className="mt-4 py-2">
              Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
              insyaAllah kami akan menyelenggarakan acara:
            </p>

            {/* Love animation */}
            <div className="position-relative">
              <div
                className="position-absolute"
                style={{ top: "0%", right: "10%" }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  size="2x"
                  className="opacity-50"
                  style={{ animation: "animate-love 3s infinite" }}
                />
              </div>
            </div>

            <div className="overflow-x-hidden">
              <div
                className="py-2"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h2 className="font-esthetic" style={{ fontSize: "2rem" }}>
                  Akad
                </h2>
                <p>Pukul 10.00 WIB - Selesai</p>
              </div>

              <div
                className="py-2"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="font-esthetic" style={{ fontSize: "2rem" }}>
                  Resepsi
                </h2>
                <p>Pukul 13.00 WIB - Selesai</p>
              </div>
            </div>

            <div className="py-2" data-aos="fade-up" data-aos-duration="1500">
              <div className="text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.32153506175916!2d110.56453612394641!3d-7.337657719215445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1725093186158!5m2!1sid!2sid"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://maps.app.goo.gl/NaYi2EWZ5pKNfvjC6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm rounded-pill shadow-sm mb-2 px-3"
              >
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                Lihat Google Maps
              </a>
              <p className="mb-0 mt-1 mx-1 pb-4" style={{ fontSize: "0.9rem" }}>
                RT05/RW02 Dusun TukSongo, Desa Krandon Lor, Kec. Suruh, Kab.
                Semarang, Jawa Tengah 50774
              </p>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default Date;
