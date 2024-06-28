import React from "react";
import "./HeaderNavlinks.scss";
import ProfileCard from "../ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/refresh.svg";

function HeaderNavlinks() {
  return (
    <section className="navlinks">
      <div className="navlinks-left">
        <Link to="/" className="navlinks-left__text navlinks-left__text--home">
          Home
        </Link>
        <Link
          to="/training"
          className="navlinks-left__text navlinks-left__text--learning"
        >
          My Learning
        </Link>
        <Link
          to="/training/start"
          className="navlinks-left__text navlinks-left__text--manage"
        >
          Manage
        </Link>
        <Link
          to="/training/info"
          className="navlinks-left__text navlinks-left__text--admin"
        >
          Admin
        </Link>
      </div>

      <div className="navlinks-right">
        <img
          src={logo}
          alt="refresh icon"
          className="navlinks-right__refresh"
        ></img>
        <p className="navlinks-right__dots">...</p>
      </div>
    </section>
  );
}

export default HeaderNavlinks;
