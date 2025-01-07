import Wrapper from "../../shared/Wrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CardExperience from "./card";
import { experiences } from "../../../utils/data";
import Work from "../../shared/icons/work";

const Experience = () => {
  return (
    <section id="experience" className="w-full">
      <Wrapper className="flex-col mb-6 mt-10 px-5 md:mt-6 lg:my-8 items-start justify-start">
        <div className="flex flex-col space-y-2 text-primary dark:text-primary pb-12">
          <h1 className="tracking-wide text-2xl">Experiencia laboral</h1>
          <span className="font-light">
            Mi recorrido profesional como desarrollador web
          </span>
        </div>
        <VerticalTimeline
          layout="1-column-left"
          lineColor="hsl(var(--secondary))"
          className="w-full"
        >
          {experiences.map((e) => (
            <VerticalTimelineElement
              key={e.company}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                paddingTop: "0.5em",
                paddingBottom: 0,
                paddingLeft: "1em",
                paddingRight: "1em",
                borderRadius: 0,
              }}
              contentArrowStyle={{
                borderRight: "none",
              }}
              iconStyle={{
                background: "#12181d",
                color: "hsl(var(--secondary))",
              }}
              icon={<Work />}
            >
              <CardExperience experience={e} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Wrapper>
    </section>
  );
};

export default Experience;
