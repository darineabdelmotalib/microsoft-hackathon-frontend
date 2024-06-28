import React, { useState, useEffect } from "react";
import "../Training/Training.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";
import { useNavigate } from "react-router-dom";
import "../TrainingStart/TrainingStart.scss";
import axios from "axios";
import video from "../../assets/vid1english.mp4";
import "./VideoPage.scss";

function VideoPage() {
  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    nav("/training");
  };
/*
  async function initialCall() {
    try {
      const response = await axios.get("http://localhost:8080/ai/training/start");
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    initialCall();
  }, []);
*/
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
            <video className="homepage__right__video" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <button className="training-input__button" onClick={handleSubmit}>
            Let's Go!
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoPage;
