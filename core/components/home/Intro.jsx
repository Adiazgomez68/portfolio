import { MainTitle } from "../shared/Titles";
import Wrapper from "../shared/Wrapper";
import Logo from "../../../public/images/Logo.svg";
import HorizontalLine from "../shared/icons/HorizontalLine";

const Intro = () => {
  return (
    <section id="intro" className=" mt-14">
      <Wrapper className="px-5 pb-6">
        <div className="grid grid-cols-1 py-4 space-y-5 md:grid-cols-3">
          <div className={Logo}>
            <img src="" alt="Profile" />
          </div>
          <div className="flex flex-col items-center col-span-2 space-y-1 md:items-start text-primary">
            <MainTitle text="Andrés Díaz" className="text-primary" />
            <p className="text-sm font-light text-center md:text-left">
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
      <HorizontalLine className="md:opacity-50 " />
    </section>
  );
};

export default Intro;
