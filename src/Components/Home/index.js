import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import logoA from "../../assets/images/A-Letter.png";
import AnimateLetters from "../AnimatedLetters";
import "./index.scss";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "h", "m", "e", "d", "E", "z", "z", "a", "t"];
  const jobArray = ["F", "r", "o", "n", "t", "e", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 7000);
  }, []);
  return (
    <div className="container home-page">
      {loading ? (
        <div className="loaderStyle">
          <HashLoader color={"#ffd700"} loading={loading} size={90} />
        </div>
      ) : (
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={logoA} alt="name" />
            <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimateLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <h2>Frontend Developer / Javascript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      )}
    </div>
  );
};
export default Home;
