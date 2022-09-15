import {} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";
import AnimateLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
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
    <div className="container_about">
      {loading ? (
        <div className="loaderStyle">
          <HashLoader color={"#ffd700"} loading={loading} size={90} />
        </div>
      ) : (
        <>
          <div className="text-zone">
            <h1 className="title_page">
              <AnimateLetters strArray={["A", "b", "o", "u", "t", "  ", "m", "e"]} idx={15} letterClass={letterClass} />
            </h1>
            <div className="content_p">
              <p>
                I’m very ambitious front-end developer looking for a role in established IT company with the opportunity
                to work with the latest technologies on challenging and diverse projects.
              </p>
              <p>
                I'm quietly confident, naturally curious, and perpetually working on improving my chops one design
                problem at a time.
              </p>
              <p>
                If I need to define myself in one sentence that would be a family person, a sports fanatic, and
                tech-obsessed.
              </p>
            </div>
          </div>
          <div className="box_animation">
            <div className="circ_anim">
              <div className="face face_1">
                <FaHtml5 color="#F06529" />
              </div>
              <div className="face face_2">
                <FaCss3 color="#28A4D9" />
              </div>
              <div className="face face_3">
                <DiJavascript1 color="#EFD81D" />
              </div>
              <div className="face face_4">
                <FaReact color="#5ED4F4" />
              </div>
              <div className="face face_5">
                <FaBootstrap color="#712cf9" />
              </div>
              <div className="face face_6">
                <FaGithub color="#EC4D28" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default About;
