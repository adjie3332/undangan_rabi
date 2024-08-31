import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faCalendarCheck,
  faImages,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-light navbar-expand fixed-bottom rounded-top-4 p-0"
      id="navbar-menu"
    >
      <ul className="navbar-nav nav-justified w-100 align-items-center">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            <FontAwesomeIcon icon={faHouse} />
            <span className="d-block" style={{ fontSize: "0.7rem" }}>
              Home
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/couple" className="nav-link">
            <FontAwesomeIcon icon={faUserGroup} />
            <span className="d-block" style={{ fontSize: "0.7rem" }}>
              Mempelai
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/date" className="nav-link">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <span className="d-block" style={{ fontSize: "0.7rem" }}>
              Tanggal
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">
            <FontAwesomeIcon icon={faImages} />
            <span className="d-block" style={{ fontSize: "0.7rem" }}>
              Galeri
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/greetings" className="nav-link">
            <FontAwesomeIcon icon={faComments} />
            <span className="d-block" style={{ fontSize: "0.7rem" }}>
              Ucapan
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
