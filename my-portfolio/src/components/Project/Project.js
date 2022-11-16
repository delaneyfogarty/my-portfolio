import React from "react";

export default function Project({ ...project }) {
  return (
    <div>
      <div>
        <h1>{project.name}</h1>
        <p>{project.technologies}</p>
        <p>{project.description}</p>
        <h3>
          {project.github} | {project.deploy}{" "}
        </h3>
      </div>
      <div>
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}
