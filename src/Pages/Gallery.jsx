import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";

const Gallery = () => {
  return (
    <>
      <section className="dark-section" id="gallery">
        <div className="container">
          <div className="text-center">
            <h2 className="font-esthetic py-3" style={{ fontSize: "2rem" }}>
              Galeri
            </h2>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="img-crop border border-3 border-light shadow">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="gallery"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="img-crop border border-3 border-light shadow">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="gallery"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="img-crop border border-3 border-light shadow">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="gallery"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="img-crop border border-3 border-light shadow">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="gallery"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="img-crop border border-3 border-light shadow">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="gallery"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="img-crop border border-3 border-light shadow">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="gallery"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default Gallery;
