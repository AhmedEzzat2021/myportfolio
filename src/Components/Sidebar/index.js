import { faEnvelope, faGear, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logoA from "../../assets/images/A-Letter.png";
import "./index.scss";
const Sidebar = () => (
  <div className="nav-bar">
    <Link to="/myportfolio" className="logo">
      <img src={logoA} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" className="link_home" to="/myportfolio">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" className="link_about" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" className="link_skills" to="/skills">
        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" className="link_contact" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/ahmed-ezzat-bb4709235/" rel="noreferrer" target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/AhmedEzzat2021" rel="noreferrer" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ahmedezat20900" rel="noreferrer" target="_blank">
          <FaTwitter />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
