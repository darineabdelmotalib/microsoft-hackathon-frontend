import React, { useEffect, useRef } from "react";
import "./HomePage.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const nav = useNavigate();
  const sendInputCalled = useRef(false); // Ref to track if sendInput has been called

  function handleButton(event) {
    event.preventDefault();
    nav("/training/start");
  }

  async function sendInput() {
    try {
      const response = await axios.get(`http://localhost:8080/ai/`);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    if (!sendInputCalled.current) { // Check if sendInput has been called
      sendInput();
      sendInputCalled.current = true; // Set the ref to true after the function is called
    }
  }, []);

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
        <div className="homepage__left">
          <ProfileCard />
          <InterestCard />
        </div>

        <div className="homepage__right__container">
          <div className="homepage__right">
            <p className="homepage__right__text">
              Hello, I am Flippy, your personalized helper!
            </p>
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

export default HomePage;
