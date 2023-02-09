import Wrapper from "../shared/Wrapper";
import { ForthTitle } from "../shared/Titles";
import TechnologiesList from "./TechnologiesList";
import Button from "../shared/Button";

const ProjectCard = ({ image, title, description, techs, link }) => {
  return (
    <div className="w-full px-6 my-7">
      <Wrapper className="flex-col items-center space-y-3">
        <div className="items-center justify-center w-[100%]">
          <img src={image} alt="Projects" />
        </div>

        <div className="w-full text-left">
          <ForthTitle className="pb-1" text={title} />
          <p> {description} </p>
          <div className="flex my-3 space-x-2">
            {techs.map((tech, index) => (
              <TechnologiesList key={index} icon={tech} />
            ))}
          </div>
        </div>
        <Button
          isRouter
          link={link}
          target="_blank"
          title="View Project"
          className="p-2 bg-[#1BEB7C] w-full rounded-md text-white"
        />
      </Wrapper>
    </div>
  );
};

export default ProjectCard;
