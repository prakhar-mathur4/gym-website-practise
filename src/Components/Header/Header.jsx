import React, { useState } from "react";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const mobile = window.innerWidthe <= 768 ? true : false;

  const [menuopened, setMenuopened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="logopng" />
      {menuopened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuopened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link to="hero" smooth={true} span={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} span={true}>
              Program
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} span={true}>
              Why us?
            </Link>
          </li>
          <li>
            <Link to="plans" smooth={true} span={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} span={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
