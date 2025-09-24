import { Download, Email, Github, LinkedIn } from "./icons/SolciaMedias";
import Wrapper from "./Wrapper";

const Media = ({ children }) => {
  return (
    <Wrapper
      className="hidden xl:flex xl:flex-col z-[99] xl:py-10 xl:text-primary xl:dark:text-secondary"
      maxScreen="max-w-screen-xl"
    >
      <div className="flex flex-col items-center space-y-6 fixed left-28 bottom-0 animate-fade-up">
        <div className="space-y-5 flex-col flex">
          <LinkedIn className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <Github className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
          <Email className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
        </div>
        <div className="w-[1px] bg-secondary dark:bg-white h-40"></div>
      </div>

      <div className="flex flex-col items-center space-y-6 fixed right-28 bottom-0 animate-fade-up">
        <Download className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
        <div className="w-[1px] bg-secondary dark:bg-white h-40"></div>
      </div>
    </Wrapper>
  );
};

export default Media;
