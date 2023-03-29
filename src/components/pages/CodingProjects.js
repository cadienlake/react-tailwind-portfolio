import React from "react";
// Importing components and images we need for this page.
import Project from "../codingProjectsComponents/Project";
import bookShare from "./../../assets/images/bookShare.gif";
import cocktailSearch from "./../../assets/images/cocktailSearch.png";
import ecommerceBackend from "./../../assets/images/ecommerceBackend.png";
import passwordGenerator from "./../../assets/images/passwordGenerator.png";
import techBlog from "./../../assets/images/techBlog.png";
import weatherDashboard from "./../../assets/images/weatherDashboard.png";

const CodingProjects = () => {
  return (
    <section id="portfolio" className="p-10">
      {/* This page will be animated upon load */}
      <div className="animate-enter flex flex-col justify-evenly">
        <h1 class="text-biggie lowercase text-center">Coding Projects</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {/* The Project function takes the props link, imgLink, githubLink, and projectTitle and generates a card for each of them. */}
          <Project link="https://bookclub-project-two.herokuapp.com/" imgLink={bookShare} githubLink="https://github.com/Y-M-C-J/bookclub-project-two" projectTitle="BookShare" />
          <Project link="https://dork-diaries.github.io/API-team-project/" imgLink={cocktailSearch} githubLink="https://github.com/dork-diaries/API-team-project" projectTitle="Cocktails & Dreams" />
          <Project link="https://tech-blog-clj.herokuapp.com/" imgLink={techBlog} githubLink="https://github.com/cadienlake/tech_blog_clj" projectTitle="The TechBlog" />
          <Project link="https://cadienlake.github.io/weather-tracker/" imgLink={weatherDashboard} githubLink="https://github.com/cadienlake/weather-tracker" projectTitle="Weather Tracker" />
          <Project link="https://drive.google.com/file/d/1_7qiq4tlYlFgrIQMHwY1i9XO6OMCqlez/view" imgLink={ecommerceBackend} githubLink="https://github.com/cadienlake/e-commerce-backend" projectTitle="eCommerce Backend" />
          <Project link="https://cadienlake.github.io/password-generator/" imgLink={passwordGenerator} githubLink="https://github.com/cadienlake/password-generator" projectTitle="Password Generator" />
        </div>
      </div>
    </section>
  );
};

export default CodingProjects;
