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

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <span className="nav">About</span>
                  <img src="../woman.png" className="nav-icon" alt="me" />
                  {/* <a href="https://www.flaticon.com/free-icons/woman" title="woman icons">Woman icons created by Pixel perfect - Flaticon</a> */}
                </NavLink>
              </li>
              <li>
                <NavLink to="projects">
                  <span className="nav">Projects</span>
                  <img
                    src="../project.png"
                    className="nav-icon"
                    alt="projects"
                  />
                  {/* <a href="https://www.flaticon.com/free-icons/terminal" title="terminal icons">Terminal icons created by Freepik - Flaticon</a> */}
                </NavLink>
              </li>
              <li>
                <NavLink to="connect">
                  <span className="nav">Connect</span>
                  <img
                    src="../connect.png"
                    className="nav-icon"
                    alt="connect"
                  />
                  {/* <a href="https://www.flaticon.com/free-icons/connection" title="connection icons">Connection icons created by cahiwak - Flaticon</a> */}
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="connect" element={<Connect />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
