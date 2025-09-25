import { Email, Github, LinkedIn } from "../icons/SolciaMedias";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <section id="footer" className="w-full h-full z-[50] dark:bg-[#12181d]">
      <Wrapper className="flex-col py-10 text-primary-dark dark:text-secondary space-y-5 xl:space-y-5">
        <div className="space-x-5 justify-center items-center flex">
          <LinkedIn className="text-primary-dark duration-300 dark:hover:text-primary dark:text-secondary hover:text- hover:-translate-y-1" />
          <Github className="text-primary-dark duration-300 dark:text-secondary dark:hover:text-primary hover:text-secondary hover:-translate-y-1" />
          <Email className="text-secondary dark:text-secondary duration-300 dark:hover:text-primary hover:-translate-y-1" />
        </div>
        <p className="w-full text-center font-inconsolada text-primary-dark dark:text-secondary text-xs md:text-sm">
          Diseñado y construido por <strong>Andrés Díaz</strong>
        </p>
      </Wrapper>
    </section>
  );
};

export default Footer;
