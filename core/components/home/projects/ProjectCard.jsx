import Wrapper from "../../shared/Wrapper";
import TechnologiesList from "./TechnologiesList";
import ExternalLink from "../../shared/icons/ExternalLink";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import SpotlightCard from "../../motions/SpotlightCard";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ProjectCard = ({
  id,
  title,
  description,
  techs,
  link,
  showIcon = true,
  icon,
  styles,
  animation,
}) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  let spotlightColor = "";

  if (currentTheme === "dark") {
    spotlightColor = "rgba(242, 242, 242, 0.2)";
  } else {
    spotlightColor = "rgba(89, 174, 255, 0.2)";
  }

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return;

  return (
    <div
      data-aos={animation.type}
      data-aos-duration={animation.duration}
      data-aos-delay={animation.delay}
      className="!duration-300"
    >
      <SpotlightCard
        className="custom-spotlight-card !p-0 !rounded-xl"
        spotlightColor={spotlightColor}
      >
        <div className="w-full group dark:bg-gray-50/5 p-5 group rounded-xl border-secondary/50 bg-white border dark:border-gray-50/10 dark:hover:border-primary duration-200 h-full hover:border-primary-light">
          <Wrapper className="flex-col space-y-3">
            <Link href={link} target="_blank">
              <div className="w-full text-left flex flex-col md:px-0 sm:px-16 justify-between h-full relative">
                <div>
                  <ExternalLink className="text-secondary/80 dark:text-secondary/50 h-5 w-5 dark:group-hover:text-primary group-hover:text-primary-light duration-200 absolute right-0" />

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

                    <p className="pt-2 text-[14.5px] tracking-wide text-gray-600 dark:text-secondary/80 font-light">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-7 md:items-end h-full">
                  {techs.map((tech) => (
                    <TechnologiesList key={tech.id} name={tech.name} />
                  ))}
                </div>
              </div>
            </Link>
          </Wrapper>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default ProjectCard;
