import React from "react";
import "./InterestCard.scss"

function InterestCard() {
    return (
        <section className="interestcardContainer">
            <p className="intrestcardContainer__text">Your Skillset</p>

            <div className="interestcard">
                <p className="interestcard__text">You might like</p>

                <div className="interestButtons">
                    <div className="interestButtons-container">
                        <button className="interestButtons__button">Investment Analysis</button>
                        <button className="interestButtons__button">Accounting</button>
                    </div>

                    <div className="interestButtons-container">
                        <button className="interestButtons__button">Portfolio Management</button>
                        <button className="interestButtons__button">Risk Management</button>
                    </div>

                    <div className="interestButtons-container">
                        <button className="interestButtons__button">Credit Analysis</button>
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