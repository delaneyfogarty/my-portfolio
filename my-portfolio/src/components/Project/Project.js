import React from "react";

export default function Project({ ...project }) {
  return (
    <div>
      <div
        style={{
          color: "white",
          width: "400px",
          boxShadow: "1px, 2px, 9px, #F4AAB9",
          backgroundColor: "pink",
        }}
      >
        <h1>{project.name}</h1>
        <p>{project.technologies}</p>
        <p>{project.description}</p>
        <h3 style={{ textDecoration: "none" }}>
          {project.github} | {project.deploy}{" "}
        </h3>
        <img src={project.image} alt="" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
