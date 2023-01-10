import React from "react";
// import MovieCard from "./MovieCard";

function App() {
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };

  return (
    <div>
      <SocialMedia links={socialLinks} />
    </div>
  );
}

function SocialMedia({ socialLinks }) {
  return (
    <div>
      <a href={socialLinks.github}>{socialLinks.github}</a>
      <a href={socialLinks.linkedin}>{socialLinks.linkedin}</a>
    </div>
  );
}

export default App;
