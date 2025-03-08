import { projects } from "@/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="font-semibold text-xl">Projects</h1>
      <div className="flex items-center justify-center gap-10 flex-wrap text-center">
      {projects.map((project,index)=>(
        <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link}/>
      ))}
      </div>
    </div>
  );
};

export default Projects;
