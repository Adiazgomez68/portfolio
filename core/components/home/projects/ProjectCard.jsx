import Wrapper from "../../shared/Wrapper";
import { ForthTitle } from "../../shared/Titles";
import TechnologiesList from "./TechnologiesList";
import Button from "../../shared/Button";

const ProjectCard = ({ image, title, description, techs, link }) => {
  return (
    <div className="w-full px-6 my-7">
      <Wrapper className="grid flex-col items-center grid-cols-1 space-y-3 md:grid-cols-3">
        <div className="items-center justify-center w-[100%]">
          <img src={image} alt="Projects" />
        </div>

        <div className="w-full col-span-2 text-left">
          <ForthTitle className="pb-1" text={title} />
          <p className="text-sm font-light"> {description} </p>
          <div className="flex my-3 space-x-2 md:items-center">
            {techs.map((tech, index) => (
              <TechnologiesList key={index} icon={tech} />
            ))}
            <Button
              isRouter
              link={link}
              target="_blank"
              title="View Project"
              classLink="flex justify-end"
              className="hidden md:block p-2 bg-[#1BEB7C] w-38 rounded-md text-white"
            />
          </div>
          <Button
            isRouter
            link={link}
            target="_blank"
            title="View Project"
            className="md:hidden p-2 mt-2 bg-[#1BEB7C] w-full rounded-md text-white"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectCard;
