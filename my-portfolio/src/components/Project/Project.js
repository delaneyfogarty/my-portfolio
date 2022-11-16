import React from "react";

export default function Project({ ...project }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "white",
          width: "800px",
          height: "400px",
          boxShadow: "0 0 5px 7px #ee82ee",
          // 0 0 20px 7px #ebecca,
          // 0 0 25px 20px #8a2be2,
          // 0 0 30px 25px #ff1493 ",
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          padding: 15,
          margin: 30,
        }}
      >
        <h1 style={{ padding: 0, color: "black", margin: 10 }}>
          {project.name}
        </h1>
        <h3 style={{ textDecoration: "none", margin: 10 }}>
          {project.github} | {project.deploy}{" "}
        </h3>
        <p style={{ margin: 10 }}>{project.technologies}</p>
        <p style={{ margin: 15 }} å>
          {project.description}
        </p>

        <img
          src={project.image}
          alt=""
          style={{ width: "100px", height: "300px" }}
        />
      </div>
    </div>
  );
}
