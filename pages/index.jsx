import Intro from "../core/components/home/Intro";
import Skills from "../core/components/home/Skills";
import Portfolio from "../core/components/home/projects/Index";
import Contact from "../core/components/home/contact/Index";
import MainLayout from "../core/layouts/MainLayout";
import Experience from "../core/components/home/experience";
import Media from "../core/components/shared/Media";

export default function Home() {
  return (
    <MainLayout>
      <Intro />
      {/* <Skills /> */}
      <Experience />
      <Portfolio />
      <Contact />
      <Media />
    </MainLayout>
  );
}
