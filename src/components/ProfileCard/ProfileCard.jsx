import React from "react";
import "./ProfileCard.scss";

function ProfileCard() {
    return (
        <section className="profileCard">
            <div className="profileCard__top">
                <div className="profileCard__initial">
                    <p className="profileCard__initial__text">J</p>
                </div>
                <p className="profileCard__top__text">Joshua</p>
            </div>

            <div className="inprogress">
                <img src="" className="inprogress__img"></img>

                <div className="profileCard__info">
                    <p className="profileCard__info__title">In Progress</p>
                    <p className="profileCard__info__details">Pick up where you left off</p>
                </div>
            </div>

            <div className="inprogress">
                <img src="" className="inprogress__img"></img>

                <div className="profileCard__info">
                    <p className="profileCard__info__title">Take a quick tour</p>
                    <p className="profileCard__info__details">Learn with Viva</p>
                </div>
            </div>

            <div className="inprogress">
                <img src="" className="inprogress__img"></img>

                <div className="profileCard__info">
                    <p className="profileCard__info__title">Bookmark a course</p>
                    <p className="profileCard__info__details">From 10,000+ courses</p>
                </div>
            </div>
        </section>

    );
}

export default ProfileCard;