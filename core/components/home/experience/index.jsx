import Wrapper from "../../shared/Wrapper";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CardExperience from "./card";
import { experiences } from "../../../utils/data";
import { useTheme } from "next-themes";
import Image from "next/image";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className="w-full z-[50] dark:bg-[#12181d]">
      <Wrapper className="flex-col mb-6 mt-10 px-5 md:mt-6 lg:my-14 items-center justify-center">
        <h2 className="text-3xl font-semibold text-center mb-16 glow-text">
          Experiencia Profesional
        </h2>
        <VerticalTimeline layout="1-column-left" lineColor="#34393F" className="w-full">
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
                background: theme === "light" ? "#f3f3f3" : "#12181d",
                color: "hsl(var(--secondary))",
                overflow: "hidden",
              }}
              icon={
                <Image
                  key={e.company}
                  src={e.logo ?? "/images/Logo.png"}
                  width={200}
                  height={200}
                />
              }
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
