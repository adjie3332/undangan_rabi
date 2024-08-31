import React from "react";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import married from "../assets/img/married.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

const WelcomeCard = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const formattedName = name ? name.replace(/-/g, " ") : "Teman Temanku";
  const handleOpenClick = () => {
    const welcomeElement = document.getElementById("welcome");
    welcomeElement.style.opacity = 0;
    welcomeElement.style.transform = "translateY(-100%)";

    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <div className="loading-page" id="welcome" style={{ opacity: 1 }}>
      <div
        className="d-flex justify-content-center align-items-center p-4"
        // style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h2 className="font-esthetic mb-4" style={{ fontSize: "2.5rem" }}>
            The Wedding Of
          </h2>

          <div className="img-crop border border-3 border-light shadow mb-4 mx-auto">
            <img src={married} alt="cover" className="img-fluid" />
          </div>

          <h2 className="font-esthetic my-4" style={{ fontSize: "2.5rem" }}>
            Jindul &amp; Iwak
          </h2>
          <h5 className="font-arabic">Kepada Yth Bapak/Ibu/Saudara/i</h5>
          <h5 className="font-arabic">{formattedName} ❤️</h5>
          <button
            type="button"
            className="btn btn-light shadow rounded-4 mt-4"
            onClick={handleOpenClick}
          >
            <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" />
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
