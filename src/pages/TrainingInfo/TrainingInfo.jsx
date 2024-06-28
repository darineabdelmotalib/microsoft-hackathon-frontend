import React from "react";
import "../HomePage/HomePage.scss";
import "./TrainingInfo.scss"
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";
import {useNavigate } from "react-router-dom";

function TrainingInfo() {
    const nav = useNavigate();

    function handleButton(event) {
        event.preventDefault();
        nav("/training/start");
    }


  return (
    <section className="homepage">
      <div className="homepage__heading">
        <p className="homepage__heading__title">Welcome to Viva Training</p>
        <div className="homepage__heading__input-container">
          <input className="homepage__heading__input" placeholder="Search Viva Learning" />
        </div>
      </div>

      <div className="homepage__main-container">
        <div className="homepage__left">
          <ProfileCard />
          <InterestCard />
        </div>

        <div className="homepage__right__container">
          <div className="homepage__right">
            <p className="homepage__right__text">Hello, I am Flippy, your personalized helper!</p>
          </div>
          <button className="homepage__right__container__button" onClick={handleButton}>Start Your Training</button>
        </div>
      </div>
    </section>
  );
}

export default TrainingInfo;
