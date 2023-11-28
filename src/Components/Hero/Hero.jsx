import React from "react";
import { Link } from "react-scroll";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from "../Header/Header.jsx";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="blur blur-h"></div>

      {/* Left Side Div */}
      <div className="left-h">
        <Header />
        {/* The Best add Section */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div className="">
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div className="hero-text-liner">
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
        </div>

        {/* Experince figuers */}
        <div className="figures">
          <div>
            <span className="div-span-number">+140</span>
            <span className="div-span-text">Expert Coachs</span>
          </div>
          <div>
            <span className="div-span-number">+978</span>
            <span className="div-span-text">Members joined</span>
          </div>
          <div>
            <span className="div-span-number">+50</span>
            <span className="div-span-text">Fitness Program</span>
          </div>
        </div>

        {/* Button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side Div */}
      <div className="right-h">
        <button className="btn">
          <Link to="join-us" smooth={true} span={true}>
            Join Now
          </Link>
        </button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* Hero Image */}
        <div>
          <img src={hero_image} className="hero_image" alt="hero_imge" />
          <img
            src={hero_image_back}
            className="hero_image_back"
            alt="hero_imge"
          />
        </div>

        {/* Calories box */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
