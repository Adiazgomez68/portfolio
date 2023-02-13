import { ThirdTitle } from "../../shared/Titles";
import Wrapper from "../../shared/Wrapper";
import projects from "../../../utils/projects.json";
import ProjectCard from "./ProjectCard";
import HorizontalLine from "../../shared/icons/HorizontalLine";

const Portfolio = () => {
  return (
    <section id="projects" className="w-full">
      <Wrapper className="flex-col mb-6">
        <ThirdTitle text="Portfolio" className="text-center text-primary" />
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            techs={project.technologies}
            link={project.link}
          />
        ))}
      </Wrapper>

      <HorizontalLine />
    </section>
  );
};

export default Portfolio;
