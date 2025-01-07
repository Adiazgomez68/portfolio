import Wrapper from "../../shared/Wrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../utils/data";
import Button from "../../shared/Button";
import { useEffect, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const { responsiveSize } = useWindowSize();

  const visibleProjects =
    (showAll || responsiveSize !== "xs") && loading
      ? projects
      : projects.slice(0, 3);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <section id="projects" className="w-full">
      <Wrapper
        className="flex-col mb-6 px-5 mt-8 md:mt-6 lg:my-8 items-start justify-start"
        containerClassName="h-auto"
      >
        <div className="flex flex-col space-y-2 text-primary dark:text-primary">
          <h1 className="tracking-wide text-2xl">Proyectos</h1>
          <span className="font-light">Algunas cosas que he construido</span>
        </div>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-7 duration-500 ease-in-out overflow-hidden`}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techs={project.technologies}
              link={project.link}
            />
          ))}
        </div>
        <div className="flex w-full justify-center items-center pt-14">
          <Button onClick={toggleShowAll}>
            {showAll ? "Ver menos" : "Ver todos"}
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
