import React from "react";
import { GitHub, Globe } from "react-feather";

const Project = (props) => {
  return (
    <div>
      <div className="container">
        <img src={props.imgLink} className="project-image" alt="Project Preview"></img>
        <h1 className="project-title">{props.projectTitle}</h1>
        <a className="github-logo" href={props.githubLink}>
          <GitHub className="w-50 h-50 hover:fill-red-500" />
        </a>
        <a className="website-logo" href={props.link}>
          <Globe className="w-50 h-50 hover:fill-red-500" />
        </a>
      </div>
    </div>
  );
};

export default Project;
