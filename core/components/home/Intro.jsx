import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import HorizontalLine from "../shared/icons/HorizontalLine";
import Button from "../shared/Button";

const Intro = () => {
  return (
    <section id="intro" className="pt-36">
      <Wrapper className="px-5 pb-6">
        <div className="grid grid-cols-1 py-4 space-y-5 md:gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center col-span-3 space-y-1 md:items-start text-primary">
            <h1 className="font-medium text-[4.2rem] leading-none">
              Andrés Díaz
            </h1>
            <h2 className="font-extralight text-5xl text-primary/70">
              Desarrollador Web
            </h2>
            <p className="font-light tracking-wide pt-8 text-center text-gray-900 md:text-left pr-5 dark:text-primary">
              Soy Desarrollador Web con 2 años de experiencia, enfocado en la
              construcción de aplicaciones modernas y eficientes. He trabajado
              con startups, pequeñas empresas y proyectos individuales,
              ayudándoles a transformar sus ideas en soluciones digitales.
            </p>
          </div>
          <div className="flex justify-end items-start">
            <Image
              src="/images/arrows.svg"
              width={100}
              height={100}
              alt="arrows"
              className="w-10 animate-[bounce_1.2s_ease-in-out_infinite]"
            />
          </div>
          <Button title="Descargar CV" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Intro;
