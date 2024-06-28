import React from "react";
import "./Cards.scss";

function Cards() {
  return (
    <section className="cards">
      <div className="cards__feature-main">
        <div className="cards__feature-first">Time Management Tips</div>
        <div className="cards__feature-second">
          Organizing Your Remote Office for Maximum Productivity
        </div>
      </div>
      <div className="cards__course-container">
      <h3 className="cards__course-heading">Get started with a quick course</h3>
      
      </div>
      <div className="cards__course-section">
        <div className="cards__course-formatting cards__modifier">
          Formatting
        </div>
        <div className="cards__course-approval cards__modifier">
          Create approvals
        </div>
        <div className="cards__course-excel cards__modifier">
          Intro to Excel
        </div>
        <div className="cards__course-collabration cards__modifier">
          Collaboration
        </div>
        <div className="cards__course-onedrive cards__modifier">
          Share and sync with OneDrive
        </div>
      </div>
    </section>
  );
}

export default Cards;