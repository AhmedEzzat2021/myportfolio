import React, { useEffect, useState } from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiRedux, SiStyledcomponents } from "react-icons/si";
import HashLoader from "react-spinners/HashLoader";
import AnimateLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 6000);
  }, []);

  return (
    <div className="container_skills">
      {loading ? (
        <div className="loaderStyle">
          <HashLoader color={"#ffd700"} loading={loading} size={90} />
        </div>
      ) : (
        <>
          <div className="text-zone">
            <h1 className="title_page">
              <AnimateLetters
                strArray={["S", "k", "i", "l", "l", "s", " ", "&", " ", "Experience"]}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
            <div className="content_p">
              <p>
                I am experience in front-end development including technologies like
                <span className="skill_my"> HTML5</span>,<span className="skill_my"> CSS3</span>,
                <span className="skill_my"> JavaScript</span>,<span className="skill_my"> React</span>,
                <span className="skill_my"> Redux</span>,<span className="skill_my"> Styled Component</span>,
                <span className="skill_my"> Bootstrap</span>,<span className="skill_my"> Sass</span>,
                <span className="skill_my"> Git</span>
              </p>
              <p>
                Have solid understanding of semantic HTML, CSS, and core JS concepts,Have advanced knowledge in React.js
                with redux,Advanced in CSS topics like Flex-box, Grid, Animations, Media Queries,Familiar with using Git
                & Github and ager to face new challenges in the field of web-development.
              </p>
              <p>
                Visit my
                <a
                  target="_blank"
                  className="linked_link"
                  href="https://www.linkedin.com/in/ahmed-ezzat-bb4709235/"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                profile for more details.
              </p>
            </div>
          </div>
          <div className="boxes_skills">
            <span className="box_skill anim__1" nameafter="HTML5">
              <FaHtml5 />
            </span>
            <span className="box_skill anim__2" nameafter="CSS3">
              <FaCss3 />
            </span>
            <span className="box_skill anim__3" nameafter="Javascript">
              <DiJavascript1 />
            </span>
            <span className="box_skill anim__4" nameafter="Bootstrap">
              <FaBootstrap />
            </span>
            <span className="box_skill anim__5" nameafter="SASS">
              <FaSass />
            </span>
            <span className="box_skill anim__6" nameafter="Reactjs">
              <FaReact />
            </span>
            <span className="box_skill anim__7" nameafter="REDUX">
              <SiRedux />
            </span>
            <span className="box_skill anim__8" nameafter="GIT&GITHUB">
              <FaGithub />
            </span>
            <span className="box_skill anim__9" nameafter="StyledComp">
              <SiStyledcomponents />
            </span>
          </div>
        </>
      )}
    </div>
  );
};
export default Skills;
