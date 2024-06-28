import React, { useEffect, useState } from "react";
import "./Training.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InterestCard from "../../components/InterestCard/InterestCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Training() {
  const [chatQuestion, setChatQuestion] = useState("Are you ready!?");
  const [inputValue, setInputValue] = useState("");
  const [currentApiCall, setCurrentApiCall] = useState(0);
  const [responses, setResponses] = useState([]);
  const nav = useNavigate();

  const endpoints = [
    "/first",
    "/second",
    "/third",
    "/forth"
  ];

  const handleSubmit = () => {
    setChatQuestion(inputValue);
    setInputValue("");
    // Trigger the next API call
    if (currentApiCall < endpoints.length) {
      setCurrentApiCall((prevCall) => prevCall + 1);
    } else {
      nav("/videos");
    }
  };

  async function fetchChatQuestion(index) {
    try {
      const response = await axios.get(`http://localhost:8080${endpoints[index]}`);
      setResponses((prevResponses) => [...prevResponses, response.data]);
      setChatQuestion(response.data);
    } catch (error) {
      console.log("Error fetching chat question:", error);
    }
  }

  useEffect(() => {
    if (currentApiCall > 0 && currentApiCall <= endpoints.length) {
      fetchChatQuestion(currentApiCall - 1);
    }
  }, [currentApiCall]);

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
