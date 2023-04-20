import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";


import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [Project, setProject] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null); // stocke l'ID du projet sélectionné

  const projects = [
    {
      id: 1,
      title: "Fractales Generator",
      description: "Design & Development",
      img: img1,
      link: "https://fractales-generator.github.io/fractales-generator/"
    },
    {
      id: 2,
      title: "casa-transactions",
      description: "Design & Development",
      img: img1,
      link: "https://casa-transactions.com"
    },
    {
      id: 3,
      title: "Portfolio Francis Fernsner",
      description: "Design & Development",
      img: img1,
      link: "https://francisfernsner.com/"
    },
    {
      id: 4,
      title: "Les Délices de got",
      description: "Design & Development",
      img: img1,
      link: "https://lesdelicesdegot.com/"
    }
   
    
  ];

  return (
    <>
      <div id="projects" className="projects  text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
         
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setProject(1)}
            className={`font-bold text-[19px] border-2  rounded-[6px] p-[4px] ${
              Project == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
    </div>
    <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
      {Project === 1
        ? projects.map((item, i) => (
            <ProjectCard
              key={i}
              item={item}
              onClick={() => setSelectedProject(item.id)} // stocke l'ID du projet sélectionné lorsqu'il est cliqué
            />
          ))
        : null}
    </div>
    {Project === 2 ? (
      <div
        id="text2"
        className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        atque porro quasi dolorum facere tempore maxime nemo quia nulla
        blanditiis doloribus, dolore, voluptas aspernatur harum facilis
        cumque magni soluta sapiente.
      </div>
    ) : null}
    {Project === 3 ? (
      <div
        id="text1"
        className="tab-pane  text-center text-white py-5   lg:p-5"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
      </div>
    ) : null}

    {/* Affiche le projet sélectionné en taille réelle */}
    {selectedProject && (
      <div
        className="project-fullscreen"
        onClick={() => setSelectedProject(null)} // retire le projet sélectionné lorsqu'il est cliqué à nouveau
      >
        {projects.map((item) =>
          item.id === selectedProject ? (
            <div key={item.id} className="project-fullscreen-inner">
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ) : null
        )}
      </div>
    )}
  </div>
</>

);
}

export default Projects;
