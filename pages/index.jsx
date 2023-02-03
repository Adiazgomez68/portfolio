import Intro from "../core/components/home/Intro";
import Skills from "../core/components/home/Skills";
import MainLayout from "../core/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Intro />
      <Skills />
    </MainLayout>
  );
}
