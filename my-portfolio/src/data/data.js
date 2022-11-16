export const projects = [
  {
    id: 1,
    name: "Sage",
    description:
      "An app designed to make reading easier for children with dyslexia. Using a brand new API, Bionic Reading, Sage takes popular children short stories and converts them at the click of a button using generated artificial fixation points.",
    image: "sage.png",
    technologies: "React | Supabase | Bionic Reading API | CSS",
    github: <a href="https://github.com/delaneyfogarty/Sage"> Github </a>,
    deploy: (
      <a href="https://tourmaline-meringue-2b9aba.netlify.app/">
        {" "}
        Deployed Site{" "}
      </a>
    ),
  },
  {
    id: 2,
    name: "TrashApp",
    description:
      "A social media app where users upload an image and caption of found/discovered items, and users rate each others items as being 'trash' or 'treasure.",
    image: "trashapp.png",
    technologies: "React | Cloudinary | Node.js | Material UI",
    github: (
      <a href="https://github.com/Gift-WrApp-Crew/TrashApp--FE"> Github </a>
    ),
    deploy: (
      <a href="https://coruscating-duckanoo-7b598c.netlify.app/">
        {" "}
        Deployed Site{" "}
      </a>
    ),
  },
  {
    id: 3,
    name: "Alchademy",
    description:
      "A Canvas replica specifically for Alchemy Code Lab.Implemented Github OAuth and Github's REST APIs to automatically place a user into the course(s) that they belong to by referencing teams within a Github Organization.",
    image: "alchademy.png",
    technologies: "React | Node.js | Express | PostgreSQL | Jest",
    github: <a href="https://github.com/Alchademy"> Github </a>,
    deploy: <a href="https://alchademy.netlify.app/"> Deployed Site </a>,
  },
  {
    id: 4,
    name: "GiftWrApp",
    description:
      "An app designed to help you never forget another birthday! Allows users to keep track of their loved one's birthdays as well as compile a list of gift ideas throughout the year.",
    image: "giftwrapp.png",
    technologies: "Vanilla JS | Supabase",
    github: <a href="https://github.com/delaneyfogarty/Gift-wrApp"> Github </a>,
    deploy: (
      <a href="https://magnificent-sherbet-831ac9.netlify.app/">
        {" "}
        Deployed Site{" "}
      </a>
    ),
  },
];
