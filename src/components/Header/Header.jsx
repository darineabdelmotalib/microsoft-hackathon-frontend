import React from "react";
import "./Header.scss"


function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src="#" className="header-left__dots"></img>
                <p className="header-left__text">Training</p>
            </div>

            <div className="header-right">
                <img src='#' className="header-right__setting-logo"></img>
                <img src="#"className="header-right__question-logo"></img>
                <div className="header-profile">
                    <p className="header-profile__initials">JB</p>
                </div>
            </div>
        </header>
    )
}

export default Header;
