import React from "react";
import "./skill.css";

import SkillComp from "./SkillComp";
import c from "../../store/skill/c.png"
import cpp from "../../store/skill/c++.png";
import python from "../../store/skill/python.png";
import js from "../../store/skill/javascript.png";
import react from "../../store/skill/reactjs.png";
import node from "../../store/skill/nodejs.png";
import express from "../../store/skill/express.png"
import mongodb from "../../store/skill/mongodb.png"
import next from "../../store/skill/next.webp";
import deep from "../../store/skill/deep.png";
import git from "../../store/skill/git.png";
import sql from "../../store/skill/sql.jpg";


export default function Skill() {
  return (
    <>
      <div className="mainSkill background" id="skill">

      <h1 className="myskills">Skills</h1>

        <div className="skills">

        <div className="skill">
          <SkillComp img={c} name="C" />
          <SkillComp img={cpp} name="C++"/>
          <SkillComp img={python} name="Python"/>
          <SkillComp img={js} name="Javacript"/>
          
        
        </div>
        <div className="skill">
        <SkillComp img={react} name="React Js"/>
          <SkillComp img={node} name="Node Js"/>
          <SkillComp img={express} name="Express Js"/>
          <SkillComp img={mongodb} name="MongoDB"/>
         
        </div>
        <div className="skill">
        <SkillComp img={next} name="Next Js"/>
        <SkillComp img={deep} name="Deep Learning"/>
        <SkillComp img={git} name="Git"/>
        <SkillComp img={sql} name="SQL"/>
         
        </div>
          
        </div>

      </div>
    </>
  );
}


 