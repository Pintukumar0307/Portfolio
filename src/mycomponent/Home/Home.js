import React from "react";
import Pdf from "../../store/Resume.pdf";
import img from "../../store/logo.png";
import "./home.css";

export default function Home() {
  return (
    <div className="home" id="home">

      <div className="home-content">
        <h2 className="name">Hi, I'm Pintu Kumar.</h2>
        <h1 className="title">MERN Stack Developer.</h1>
        <h3 className="boi">Pursuing B.Tech in Guru Ghasidas University.</h3>

        <div className="btn">
          <button className="resume" onClick={() => window.open(Pdf)}>
            Resume
          </button>

          <a href="#contact">
            <button className="hireme">Hire Me</button>
          </a>
        </div>
        
        </div>
        
        <div className="home-img">
          <img src={img} alt="Logo" />
        </div>
     
    </div>
  );
}
