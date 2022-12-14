import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Connect from "./components/Connect/Connect";
import ProjectPage from "./components/Project/ProjectPage";
import GitHubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <div style={{ margin: 0, height: "50px", width: "100%" }}>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className="nav">Me</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className="nav">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="connect"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className="nav">Connect</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="connect" element={<Connect />} />
        </Routes>
      </Router>
      <div className="footer">
        <a href="https://www.linkedin.com/in/delaney-fogarty/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/delaneyfogarty">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default App;
