import { Github, Linkedin } from "../icons/SolciaMedias";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <section id="footer" className="w-full">
      <Wrapper className="flex-col pb-10 space-y-5 text-primary">
        <div className="flex justify-center w-full space-x-3 ">
          <Github />
          <Linkedin />
        </div>
        <div className="w-full text-center">
          <p>
            Created by <b>Andrés Díaz</b>
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
