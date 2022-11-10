import React from "react";

export default function Connect() {
  return (
    <div>
      <section className="left-section">
        <h1>Connect with me!</h1>
      </section>
      <section className="right-section">
        <a href="https://www.linkedin.com/in/delaney-fogarty/" exact="true">
          <img src="../assets/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/delaneyfogarty" exact="true">
          <img src="../assets/github2.png" alt="github" />
        </a>
        <p>
          {" "}
          send me an{" "}
          <a href="mailto: delaney.fk@gmail.com" exact="true">
            {" "}
            email{" "}
          </a>{" "}
        </p>
        <p>
          check out my resume
          {/* need to link resume still */}
        </p>
      </section>
    </div>
  );
}
