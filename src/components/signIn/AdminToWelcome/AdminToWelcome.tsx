import React, { useEffect } from "react";
import logo from "../../../assets/img/logo.svg";
import gsap from "gsap";
import { NavLink, useNavigate } from "react-router-dom";

const percent = "60%";

const AdminToWelcome = () => {
  useEffect(() => {
    gsap.to(".admin--general__title", {
      y: `${percent}`,
      opacity: 1,
      duration: 3,
      scrub: 5,
    });
  }, []);
  return (
    <div id="admin">
      <div className="admin--general">
        <div className="admin--general__title">
          <div className="admin--general__title--img">
            <img src={logo} alt="no_image" />
          </div>
          <div className="admin--general__title--h1">
            <h1>
              User Name, welcome to <br />
              your personal account!
            </h1>
          </div>
          <div className="admin--general__title--btn">
            <button>
              <NavLink to="/profile/">Continue</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminToWelcome;
