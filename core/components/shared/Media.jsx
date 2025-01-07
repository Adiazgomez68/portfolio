import { EMAIL } from "../../utils/constants";
import { Github, LinkedIn } from "./icons/SolciaMedias";
import Wrapper from "./Wrapper";

const Media = ({ children }) => {
  return (
    <Wrapper
      className="hidden xl:flex xl:flex-col xl:py-10 xl:text-primary xl:dark:text-secondary"
      maxScreen="max-w-screen-xl"
    >
      <div className="flex flex-col items-center space-y-6 fixed left-28 bottom-0 animate-fade-up">
        <div className="space-y-5 flex-col flex">
          <LinkedIn className="text-secondary dark:text-primary duration-300 dark:hover:text-secondary hover:-translate-y-1" />
          <Github className="text-secondary dark:text-primary duration-300 dark:hover:text-secondary hover:-translate-y-1" />
        </div>
        <div className="w-[1px] bg-secondary dark:bg-white h-40"></div>
      </div>

      <div className="flex flex-col items-center space-y-28 fixed right-28 bottom-0 animate-fade-up">
        <a
          className="absolute hover:-translate-y-1 font-light tracking-wider duration-300 text-xs text-secondary dark:text-primary dark:hover:text-secondary cursor-pointer transition rotate-90"
          href={`mailto:${EMAIL}`}
        >
          farbogomez@gmail.com
        </a>
        <div className="w-[1px] bg-secondary dark:bg-white h-40"></div>
      </div>
    </Wrapper>
  );
};

export default Media;
