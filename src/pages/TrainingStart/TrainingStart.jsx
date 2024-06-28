import React, { useState } from "react";
import "../Training/Training.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";
import { NavLink, useNavigate } from "react-router-dom";
import "./TrainingStart.scss";

function TrainingStart() {
    const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    nav("/training")
  };

  return (
    <section className="homepage">
      <div className="homepage__heading">
        <p className="homepage__heading__title">Viva Training</p>
        <div className="homepage__heading__input-container">
          <input
            className="homepage__heading__input"
            placeholder="Search Viva Learning"
          />
        </div>
      </div>

      <div className="homepage__main-container">
        <div className="homepage__left">
          <ProfileCard />
          <InterestCard />
        </div>

        <div className="homepage__right__container training__right__container">
          <div className="homepage__right training__right__container">
            <p className="homepage__right__text trainingstart__text">
                <strong> Joshua, ConnectFirst has allocated 60 hours of training material to you.</strong> <br></br><br></br>
                This is expected to be completed by <strong>Sept 28th 2024</strong>. My job is to make this experience enjoyable
                and manageable for you. To make a personalized training schedule for you, I need to learn 
                more about you! To do this, I will ask a series of questions. The more detail you give me the better 
                I can do my job.<br></br><br></br>
                Ready? Let's go!
            </p>
          </div>

          <button className="training-input__button" onClick={handleSubmit}>
              Let's Go!
          </button>

        </div>
      </div>
    </section>
  );
}

export default TrainingStart;
