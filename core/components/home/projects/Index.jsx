import Wrapper from "../../shared/Wrapper";
import ProjectCard from "./ProjectCard";
import HorizontalLine from "../../shared/icons/HorizontalLine";
import { projects } from "../../../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <Wrapper className="flex-col mb-6 px-5 lg:my-8 items-start justify-start">
        <div className="flex flex-col space-y-2 text-primary dark:text-primary">
          <h1 className="tracking-wide text-2xl">Proyectos</h1>
          <span className="font-light">Algunas cosas que he construido</span>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techs={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
