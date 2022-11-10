import React from "react";
import "./ProjectPage.css";

export default function ProjectPage() {
  return (
    <div className="projects">
      <section className="project-left">
        <img src={window.location.origin + "/sage.png"} alt="Sage" />
        <p className="project-text">
          <h1>Sage</h1>
          An app designed to make reading easier for children with dyslexia.
          Using a brand new API, Bionic Reading, Sage takes popular children's
          short stories and converts them at the click of a button using
          generated artificial fixation points. Sage was mob and pair programmed
          during a 1 week sprint using React JS, CSS, Bionic Reading API, and
          Supabase.
        </p>
      </section>
      <section className="project-right">
        <p className="project-text">
          <h1>TrashApp</h1>A social media app where users upload an image and
          caption of found/discovered items, and users rate each others items as
          being 'trash' or 'treasure.' TrashApp is a full stack javascript
          application created during a 2 week sprint of mob and pair programming
          using React JS, Node JS, Express, PostgreSQL, Jest, and Cloudinary.
        </p>
        <img src={window.location.origin + "/trashapp.png"} alt="TrashApp" />
      </section>
      <section className="project-left">
        <img src={window.location.origin + "/alchademy.png"} alt="Alchademy" />
        <p className="project-text">
          <h1>Alchademy</h1>A full-stack course management application built
          over a 7-day sprint using React JS, Node JS, Express, PostgreSQL, and
          Jest . Implemented Github OAuth and Github's REST APIs to
          automatically place a user into the course(s) that they belong to by
          referencing teams within a Github Organization. A Canvas replica
          specifically for Alchemy Code Lab.
        </p>
      </section>
      <section className="project-right">
        <p className="project-text">
          <h1>GiftWrApp</h1>
          An app designed to help you never forget another birthday! In a 5 day
          sprint with 3 other developers using vanilla Javascript, CSS, HTML,
          and Supabase, this front-end was built to allow users to keep track of
          their loved one's birthdays as well as compile a list of gift ideas
          throughout the year.
        </p>
        <img src={window.location.origin + "/giftwrapp.png"} alt="GiftWrApp" />
      </section>
    </div>
  );
}
