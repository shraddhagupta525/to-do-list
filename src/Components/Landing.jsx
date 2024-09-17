import React from "react";
import "./landing.css";


export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="nav-bar">
          <ul className="nav-bar-list">
            <li className="nav-list">
              <a href="/">Home</a>
            </li>
            <li className="nav-list">
              <a href="#about">About</a>
            </li>
            <li className="nav-list">
              <a href="#services">Services</a>
            </li>
            <li className="nav-list">
              <a href="#contact">Contact</a>
            </li>
            <li className="nav-list">
              <a href="#contact">Login</a>
            </li>
          </ul>
        </div>
        

        <div className="landing-content">
          <div className="landing-left">
            <h1 className="landing-h1">
              Too many tasks, not enough time?{" "}
              <span>
                Manage your day efficiently with Task Ease at your side.
              </span>
            </h1>
            <button className="get-started">Get Started</button>
          </div>
          <div className="landing-img">
            <img src="src/assets/landing1.png" alt="landing_image" />
          </div>
        </div>
      </div>
    </>
  );
}
