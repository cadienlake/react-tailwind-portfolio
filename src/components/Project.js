import React from "react";
import { GitHub, Globe } from "react-feather";

const Project = (props) => {
  return (
    <div>
    <div className="container inline-block">
      <img src={props.imgLink} className="work-picture" alt="Project Picture"></img>
      <h1 className="picture-text">{props.projectTitle}</h1>
      <a className="github-text" href={props.githubLink} target="_blank">
        <img src={GitHub} width="50" height="50" alt="GitHub SVG"></img>
      </a>
      <a className="link-text" href={props.link} target="_blank">
        <img src={Globe} width="50" height="50" alt="Globe SVG"></img>
      </a>
    </div>
  </div>
);
};

export default Project;
