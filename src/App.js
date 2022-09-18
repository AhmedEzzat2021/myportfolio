import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./Components/About";
import ContactUs from "./Components/Contactus";
import Home from "./Components/Home";
import Layout from "./Components/layout";
import Projects from "./Components/MyProjects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/myportfolio" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
