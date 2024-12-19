import Wrapper from "../../shared/Wrapper";
import TechnologiesList from "./TechnologiesList";
import Button from "../../shared/Button";
import Star from "../../shared/icons/start";
import ExternalLink from "../../shared/icons/ExternalLink";

const ProjectCard = ({ title, description, techs, link }) => {
  return (
    <div className="w-full group bg-tertiary p-5 group hover:border-secondary border border-transparent hover:-translate-y-2 duration-200">
      <Wrapper className="flex-col space-y-3">
        <div className="w-full text-left flex flex-col md:px-0 sm:px-16 justify-between h-full">
          <div>
            <div className="flex justify-between items-center pb-5">
              <Star className="text-primary h-5 w-5 group-hover:text-secondary" />
              <Button
                isRouter
                link={link}
                target="_blank"
                classLink="border-none"
              >
                <ExternalLink className="text-primary h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-3">
              <h1 className="pb-1 tracking-wide font-semibold group-hover:text-secondary duration-200 lg:text-xl text-primary dark:text-primary">
                {title}
              </h1>
              <p className="text-sm font-light tracking-wide text-primary">
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
