import Wrapper from "../../shared/Wrapper";
import TechnologiesList from "./TechnologiesList";
import Button from "../../shared/Button";
import Star from "../../shared/icons/start";
import ExternalLink from "../../shared/icons/ExternalLink";

const ProjectCard = ({ title, description, techs, link }) => {
  return (
    <div className="w-full group dark:bg-tertiary p-5 group dark:hover:border-secondary border-secondary border dark:border-transparent hover:-translate-y-2 duration-200">
      <Wrapper className="flex-col space-y-3">
        <div className="w-full text-left flex flex-col md:px-0 sm:px-16 justify-between h-full">
          <div>
            <div className="flex justify-between items-center pb-5">
              <Star className="dark:text-primary text-secondary h-5 w-5 group-hover:text-secondary" />
              <Button
                isRouter
                link={link}
                target="_blank"
                classLink="border-none"
                className="w-auto"
              >
                <ExternalLink className="text-primary h-5 w-5 hover:text-secondary duration-200" />
              </Button>
            </div>

            <div className="space-y-3">
              <h1 className="pb-1 tracking-wide hover:cursor-default text-xl font-semibold duration-200 text-primary-dark dark:text-primary">
                {title}
              </h1>
              <p className="text-sm font-light tracking-wide dark:text-primary text-primary-dark">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-7 md:items-center">
            {techs.map((tech) => (
              <TechnologiesList key={tech.id} name={tech.name} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectCard;
