import { Github, LinkedIn } from "../icons/SolciaMedias";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <section id="footer" className="w-full h-full">
      <Wrapper className="flex-col py-10 text-primary-dark dark:text-secondary space-y-5 xl:space-y-0">
        <div className="space-x-5 justify-center items-center flex xl:hidden">
          <LinkedIn className="text-primary-dark duration-300 hover:text-secondary hover:-translate-y-1" />
          <Github className="text-primary-dark duration-300 hover:text-secondary hover:-translate-y-1" />
        </div>
        <p className="w-full text-center font-inconsolada text-primary-dark dark:text-primary text-xs md:text-sm">
          Diseñado y construido por Andrés Díaz
        </p>
      </Wrapper>
    </section>
  );
};

export default Footer;
