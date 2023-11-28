import React from "react";
import RightArrow from "../../assets/rightArrow.png";
import { programsData } from "../../data/programsData.js";
import "./Programs.css";

function Programs() {
  return (
    <>
      <div className="Programs" id="programs">
        <div className="programs-header">
          <span className="stroke-text">Explore our</span>
          <span>Programs</span>
          <span className="stroke-text">to shape you</span>
        </div>
        {/* Program Catageories card */}

        <div className="program-categorie">
          {programsData.map((program) => (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="rightarrowimg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Programs;
