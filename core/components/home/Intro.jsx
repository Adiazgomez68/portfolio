import Image from "next/image";
import { MainTitle } from "../shared/Titles";
import Wrapper from "../shared/Wrapper";
import Logo from "../../../public/images/Logo.svg";

const Intro = () => {
  return (
    <section id="intro">
      <Wrapper className="px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={Logo}>
            {/* <Image src="" width={100} height={0} alt="Profile" /> */}
          </div>
          <div className="flex flex-col items-center space-y-1 text-primary">
            <MainTitle text="Andrés Díaz" className="text-primary" />
            <p className="text-sm font-light text-center">
              I am a FrontEnd Developer located in Colombia, with experience in
              the design, creation of user interfaces and DevOps. Since 2019 I
              have been making small and medium web applications, layouts,
              single page and responsive applications. Using technologies such
              as HTML, CSS, Javascript, ReactJs, VueJs, Bootstrap, Material
              Design and Tailwind css, working on projects for commercial and
              some personal clients.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Intro;
