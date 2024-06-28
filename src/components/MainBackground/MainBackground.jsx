import React from "react";
import "./MainBackground.scss"

function MainBackground() {
    return (
        <section className="mainBackground">
            <p className="mainBackground__title">Welcome back</p>
            <div className="mainBackground__input-container">
                <input className="mainBackground__input" placeholder="Search Viva Learning"></input>
            </div>
        </section>
    );
}

export default MainBackground;