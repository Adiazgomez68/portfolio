import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../utils/constants";
import { skills } from "../../utils/items";
import { CustomLeftArrow, CustomRightArrow } from "../shared/icons/Arrows";
import { ForthTitle, ThirdTitle } from "../shared/Titles";
import Wrapper from "../shared/Wrapper";

const Skills = () => {
  return (
    <section className="w-full my-10">
      <Wrapper className="flex-col space-y-11">
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
              <ForthTitle className="text-sm text-primaryx" text={skill.name} />
            </div>
          ))}
        </Carousel>
      </Wrapper>
    </section>
  );
};

export default Skills;
