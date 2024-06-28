import React from "react";
import "./HeaderNavlinks.scss"

function HeaderNavlinks() {
    return (
        <section className="navlinks">
            <div className="navlinks-left">
                <p className="navlinks-left__text navlinks-left__text--home">Home</p>
                <p className="navlinks-left__text navlinks-left__text--learning">My Learning</p>
                <p className="navlinks-left__text navlinks-left__text--manage">Manage</p>
                <p className="navlinks-left__text navlinks-left__text--admin">Admin</p>
            </div>

            <div className="navlinks-right">
                <img src="#" alt="refresh icon" className="navlinks-right__refresh"></img>
                <p className="navlinks-right__dots">...</p>
            </div>

        </section>
    )

}

export default HeaderNavlinks;