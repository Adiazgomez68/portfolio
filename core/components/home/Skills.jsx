import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../utils/constants";
import { skills } from "../../utils/items";
import { CustomLeftArrow, CustomRightArrow } from "../shared/icons/Arrows";
import { ForthTitle, ThirdTitle } from "../shared/Titles";
import Wrapper from "../shared/Wrapper";
import HorizontalLine from "../shared/icons/HorizontalLine";

const Skills = () => {
  return (
    <section id="skills" className="w-full my-12">
      <Wrapper className="flex-col pb-10 space-y-11">
        <ThirdTitle
          text="My skills"
          className="text-center text-primary dark:text-secondary"
        />
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          className="w-full"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-3 overflow-hidden"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f7f6f6]">
                <img src={skill.item} className="w-3/5" />
              </div>
              <ForthTitle
                className="text-[15px] text-primary dark:text-secondary"
                text={skill.name}
              />
            </div>
          ))}
        </Carousel>
      </Wrapper>

      <HorizontalLine className="left-0 transform rotate-180 md:opacity-50" />
    </section>
  );
};

export default Skills;
