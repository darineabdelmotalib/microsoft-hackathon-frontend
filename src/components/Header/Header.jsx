import React from "react";
import "./Header.scss"


function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src="#" alt="learning logo" className="header-left__dots"></img>
                <p className="header-left__text">Learning</p>
            </div>

            <div className="header-right">
                <img src='#' alt="setting logo" className="header-right__setting-logo"></img>
                <img src="#" alt="question mark logo" className="header-right__question-logo"></img>
                <div className="header-profile">
                    <p className="header-profile__initials">JA</p>
                </div>
            </div>
        </header>
    )
}

export default Header;
