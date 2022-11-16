import React from "react";
import "./ProjectPage.css";
import { projects } from "../../data/data.js";
import Project from "./Project";

export default function ProjectPage() {
  const list = projects.map((project) => {
    return (
      <div key={project.id}>
        <Project {...project} />
      </div>
    );
  });
  return <div>{list}</div>;
}
