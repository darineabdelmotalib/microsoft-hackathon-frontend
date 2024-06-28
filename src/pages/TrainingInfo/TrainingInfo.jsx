import React from "react";
import "../HomePage/HomePage.scss";
import "./TrainingInfo.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";
import { useNavigate } from "react-router-dom";

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
          <input
            className="homepage__heading__input"
            placeholder="Search Viva Learning"
          />
        </div>
      </div>

      <div className="homepage__main-container">
        <div className="training__left">
          <ProfileCard />
          <InterestCard />
        </div>

        <div className="training__right__container">
          <div className="training__first-row">
            <div className="training__right">
              <h1 className="course">Ethics</h1>
              <p className="training__right__text">
                Ethics and responsibility in Finance
              </p>
            </div>

            <div className="training__right">
              <h1 className="course">Corporate Finance</h1>
              <p className="training__right__text">
                Maximizing stakeholder value
              </p>
            </div>
            <div className="training__right">
              <h1 className="course">Financial Accounting</h1>

              <p className="training__right__text">
                Recording financial transactions
              </p>
            </div>
            <div className="training__right">
              <h1 className="course">Data Analysis</h1>

              <p className="training__right__text">
                Basic exploratory data analysis in Python
              </p>
            </div>
          </div>
          <button
            className="homepage__right__container__button"
            onClick={handleButton}
          >
            Start Your Training
          </button>
        </div>
      </div>
    </section>
  );
}

export default TrainingInfo;
