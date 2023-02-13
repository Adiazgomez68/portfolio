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
        <ThirdTitle text="My skills" className="text-center text-primary" />
        <Carousel
          responsive={responsive}
          className="w-full"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-3 overflow-hidden"
            >
              <div className="w-20 h-20">
                <img src={skill.item} className="w-full" />
              </div>
              <ForthTitle className="text-sm text-primary" text={skill.name} />
            </div>
          ))}
        </Carousel>
      </Wrapper>

      <HorizontalLine className="left-0 transform rotate-180" />
    </section>
  );
};

export default Skills;
