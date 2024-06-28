import React, { useState } from "react";
import "./Training.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";

function Training() {
  // State to manage the content of the ChatGPT Question
  const [chatQuestion, setChatQuestion] = useState("ChatGPT Question");

  // State to manage the input value
  const [inputValue, setInputValue] = useState("");

  // Handle the submit button press
  const handleSubmit = () => {
    // Update the chatQuestion state with the input value
    setChatQuestion(inputValue);
    // Clear the input field
    setInputValue("");
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
            <p className="homepage__right__text">{chatQuestion}</p>
          </div>

          <div className="training-input">
            <input
              className="training-input__input"
              placeholder="Enter text here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="training-input__button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;
