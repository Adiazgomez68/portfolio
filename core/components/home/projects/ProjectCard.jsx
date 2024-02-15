import Wrapper from "../../shared/Wrapper";
import { ForthTitle } from "../../shared/Titles";
import TechnologiesList from "./TechnologiesList";
import Button from "../../shared/Button";

const ProjectCard = ({ image, title, description, techs, link }) => {
  return (
    <div className="w-full px-6 my-7 group">
      <Wrapper className="flex-col items-center grid-cols-1 space-y-3 md:grid md:grid-cols-3 md:gap-5">
        <div className="items-center w-full duration-300 ease-in-out sm:w-1/2 md:w-full md:group-hover:scale-125 md:scale-110">
          <img src={image} alt="Projects" />
        </div>

        <div className="w-full col-span-2 text-left md:px-0 sm:px-16">
          <ForthTitle
            className="pb-1 tracking-wide lg:text-lg text-primary dark:text-secondary"
            text={title}
          />
          <p className="text-sm font-light tracking-wide"> {description} </p>
          <div className="flex my-3 space-x-2 md:items-center">
            {techs.map((tech, index) => (
              <TechnologiesList key={index} icon={tech}/>
            ))}
            <Button
              isRouter
              link={link}
              target="_blank"
              title="View Project"
              classLink="relative flex justify-end items-center w-full "
              className="absolute hidden p-2 text-sm text-white duration-300 bg-green-600 rounded-md hover:bg-green-500 md:block w-[8rem]"
            />
          </div>
          <Button
            isRouter
            link={link}
            target="_blank"
            title="View Project"
            className="w-full p-2 mt-2 text-white duration-300 bg-green-700 rounded-md md:hidden sm:w-1/2 hover:bg-green-600"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectCard;
