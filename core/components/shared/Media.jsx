import { useEffect, useState } from "react";
import { Download, Email, Github, LinkedIn, WhatsApp } from "./icons/SolciaMedias";
import Wrapper from "./Wrapper";
import { twMerge } from "tailwind-merge";
import CircularText from "../motions/CircularText";

const Media = () => {
  const [styles, setStyles] = useState();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const shouldAnimate = window.scrollY >= 50;

      if (shouldAnimate) {
        setStyles("animate-fade-down");
      } else {
        setStyles("animate-fade-up");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper
      className="hidden xl:flex xl:flex-col dark:bg-[#12181d] z-[99] xl:text-primary xl:dark:text-secondary"
      maxScreen="max-w-screen-xl"
    >
      <div
        className={twMerge("flex flex-col items-center space-y-6 fixed left-28 bottom-0", styles)}
      >
        <div className="space-y-5 flex-col flex">
          <LinkedIn className="text-gray-600 hover:text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <Github className="text-gray-600 hover:text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <WhatsApp className="text-gray-600 hover:text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <Email className="text-gray-600 hover:text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
        </div>
        <div className="w-[1px] bg-gray-600 dark:bg-white h-40"></div>
      </div>

      <div
        className={twMerge("flex flex-col items-center space-y-6 fixed right-28 bottom-0", styles)}
      >
        <a href={"/docs/CV___Andrés_Díaz.pdf"} target="_blank" title="Descargar CV">
          <div className="relative">
            <CircularText
              text="DESCARGAR*CV*DESCARGAR*CV*"
              onHover="slowDown"
              spinDuration={20}
              className="!dark:font-light !size-[7rem] !font-normal"
              letterClassName="text-xs text-black dark:text-white"
            />

            <Download className="text-gray-600 hover:text-secondary dark:text-secondary duration-300 dark:hover:text-primary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        </a>
        <div className="w-[1px] bg-gray-600 dark:bg-white h-40"></div>
      </div>
    </Wrapper>
  );
};

export default Media;
