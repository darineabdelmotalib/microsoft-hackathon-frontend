import React from "react";
import "./InterestCard.scss"

function InterestCard() {
    return (
        <section className="interestcardContainer">
            <p className="intrestcardContainer__text">Pick your interests</p>

            <div className="interestcard">
                <p className="interestcard__text">You might like</p>

                <div className="interestButtons">
                    <div className="interestButtons-container">
                        <button className="interestButtons__button">.NET</button>
                        <button className="interestButtons__button">API Development</button>
                    </div>

                    <div className="interestButtons-container">
                        <button className="interestButtons__button">Accessibility</button>
                        <button className="interestButtons__button">Accounting</button>
                    </div>

                    <div className="interestButtons-container">
                        <button className="interestButtons__button">See More</button>
                    </div>
                </div>

                <div className="interestcard__bottom">
                    <img src="#" className="interestcard__bottom__img"></img>
                    <button className="interestcard__bottom__button">Save</button>
                </div>

            </div>
        </section>
    )
}

export default InterestCard;