import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/dotdotdot.svg";
import logo1 from "../../assets/icons/settings.svg";
import logo2 from "../../assets/icons/question.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} className="header-left__dots"></img>
        <p className="header-left__text">Training</p>
      </div>

      <div className="header-right">
        <img src={logo1} className="header-right__setting-logo"></img>
        <img src={logo2} className="header-right__question-logo"></img>
        <div className="header-profile">
          <p className="header-profile__initials">JB</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
