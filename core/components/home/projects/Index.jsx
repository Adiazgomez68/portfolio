import Wrapper from "../../shared/Wrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <Wrapper
        className="flex-col mb-6 px-5 mt-8 md:mt-6 lg:my-8 items-center justify-center"
        containerClassName="h-auto"
      >
        <h2 className="text-3xl font-semibold text-center mb-5 glow-text">Proyectos Destacados</h2>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-2 gap-4 pt-7 duration-500 ease-in-out overflow-hidden`}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techs={project.technologies}
              link={project.link}
              icon={project.icon}
              styles={project.styles}
              animation={project.animation}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
