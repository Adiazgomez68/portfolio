import { useEffect, useState } from "react";
import { Download, Email, Github, LinkedIn } from "./icons/SolciaMedias";
import Wrapper from "./Wrapper";
import { twMerge } from "tailwind-merge";

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
          <LinkedIn className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <Github className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <Email className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
        </div>
        <div className="w-[1px] bg-secondary dark:bg-white h-40"></div>
      </div>

      <div
        className={twMerge("flex flex-col items-center space-y-6 fixed right-28 bottom-0", styles)}
      >
        <Download className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
        <div className="w-[1px] bg-secondary dark:bg-white h-40"></div>
      </div>
    </Wrapper>
  );
};

export default Media;
