import React from "react";
// import p1 from './p1.png';
import "./about.css";

export default function About() {
  return (
    <>
    <div className="mainAbout" id="about">

        <h1
          className="intro"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}>
          AboutUs
        </h1>

        <div className="about">
          <p className="details">
            I am currently studying B.Tech in Information Technology in guru
            ghasidas university. Enthusiastic in Machine Learning and web
            development.
          </p>
        </div>
     

      <div className="educationAbout">
        <h1 className="education">EDUCATION</h1>
        <div className="school">
          <h2>Scottish Central School, Sasaram(Bihar)—12th</h2>
          <h4> April-2017 - May-2019</h4>
          <h4>Percentage-78.2% </h4>
        </div>

        <div className="gradution">
          <h2>Guru Ghasidas University ,Bilaspur(C.G)—B.Tech</h2>
          <h3>B.Tech in Information Technology</h3>
          <h4>November 2020 - PRESENT</h4>
          <h4>CGPA-8.43</h4>
        </div>
      </div>
      
  </div>
    </>
  );
}
