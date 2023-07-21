import { MainTitle } from "../shared/Titles";
import Wrapper from "../shared/Wrapper";
import HorizontalLine from "../shared/icons/HorizontalLine";

const Intro = () => {
  return (
    <section id="intro" className=" mt-14">
      <Wrapper className="px-5 pb-6">
        <div className="grid grid-cols-1 py-4 space-y-5 md:gap-4 md:grid-cols-3">
          <div className="flex justify-center w-full">
            <img src="/images/Profile_Photo.png" alt="Profile" />
          </div>
          <div className="flex flex-col items-center col-span-2 space-y-1 md:items-start text-primary">
            <MainTitle
              text="Andrés Díaz"
              className="text-primary dark:text-secondary"
            />
            <p className="text-sm font-light text-center text-gray-900 md:text-left dark:text-secondary">
              I am a Web Developer located in Colombia, with experience in
              the web applications development, layouts, API integration and creation of
              user interfaces. Since 2019 I have been making medium and large web apps,
              single page and responsive applications. Using technologies such as HTML,
              CSS, Javascript, ReactJs, VueJs, Laravel, Bootstrap, Material Design and
              Tailwind css, working on projects for commercial clients, companies and
              some personal ones.
            </p>
          </div>
        </div>
      </Wrapper>
      <HorizontalLine className="md:opacity-50 " />
    </section>
  );
};

export default Intro;
