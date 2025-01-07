import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Intro = () => {
  return (
    <section id="intro" className="pt-24 md:pt-36">
      <Wrapper className="px-5 pb-8">
        <div className="grid grid-cols-1 space-y-5 md:gap-4 md:grid-cols-4">
          <div className="flex flex-col col-span-3 space-y-1 items-start text-primary pb-5 md:pb-0">
            <h1 className="font-medium text-[3.7rem] md:text-[4.2rem] leading-none">
              Andrés Díaz
            </h1>
            <h2 className="font-extralight text-4xl md:text-5xl text-primary/70">
              Desarrollador Web
            </h2>
            <p className="font-light tracking-wide pt-6 md:pt-8 text-gray-900 text-left pr-5 dark:text-primary">
              Soy Desarrollador Web con 2 años de experiencia, enfocado en la
              construcción de aplicaciones modernas y eficientes. He trabajado
              con startups, pequeñas empresas y proyectos individuales,
              ayudándoles a transformar sus ideas en soluciones digitales.
            </p>
          </div>
          <div className="md:flex justify-end items-start hidden">
            <Image
              src="/images/arrows.svg"
              width={100}
              height={100}
              alt="arrows"
              className="w-10 animate-[bounce_1.2s_ease-in-out_infinite]"
            />
          </div>

          <a
            href={"/docs/CV - Andrés Díaz.pdf"}
            download
            className="flex items-center justify-center border rounded-md font-normal
              border-secondary text-secondary bg-transparent py-[0.6rem] w-full md:w-48 hover:bg-secondary/10
              duration-200 font-inconsolada"
          >
            Descargar CV
          </a>
        </div>
      </Wrapper>
    </section>
  );
};

export default Intro;
