import Wrapper from "../../shared/Wrapper";
import TechnologiesList from "./TechnologiesList";
import ExternalLink from "../../shared/icons/ExternalLink";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({ id, title, description, techs, link, showIcon = true, icon, styles }) => {
  return (
    <div className="w-full group dark:bg-gray-50/5 p-5 group rounded-xl border-secondary border dark:border-gray-50/10 dark:hover:border-primary hover:-translate-y-2 duration-200">
      <Wrapper className="flex-col space-y-3">
        <Link href={link} target="_blank">
          <div className="w-full text-left flex flex-col md:px-0 sm:px-16 justify-between h-full relative">
            <div>
              <ExternalLink className="text-secondary/50 h-5 w-5 group-hover:text-primary duration-200 absolute right-0" />

              <div className="space-y-3">
                <div className="space-x-3 flex flex-row items-center w-full">
                  {showIcon && (
                    <img
                      src={icon}
                      alt={id}
                      className={twMerge("object-contain size-[50px] rounded-full", styles)}
                    />
                  )}

                  <h1 className="tracking-wide text-xl max-w-xs font-semibold w-full duration-200">
                    {title}
                  </h1>
                </div>

                <p className="pt-2 text-[14.5px] tracking-wide text-secondary/80 font-light">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-7 md:items-end ">
              {techs.map((tech) => (
                <TechnologiesList key={tech.id} name={tech.name} />
              ))}
            </div>
          </div>
        </Link>
      </Wrapper>
    </div>
  );
};

export default ProjectCard;
