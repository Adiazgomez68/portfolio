import { Github, Linkedin } from "../icons/SolciaMedias";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <section id="footer" className="w-full h-full">
      <Wrapper className="flex-col pt-10 pb-10 space-y-5 text-primary dark:text-secondary">
        <p className="w-full text-center font-inconsolada text-primary text-sm">
          Diseñado y construido por Andrés Díaz
        </p>
      </Wrapper>
    </section>
  );
};

export default Footer;
