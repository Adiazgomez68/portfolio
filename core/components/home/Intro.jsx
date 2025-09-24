import { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import {
  ArrowRight,
  CustomLeftArrow,
  IoIosArrowBack,
  IoIosArrowForward,
  RightArrowTriangle,
} from "../shared/icons/Arrows";

const Intro = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Desarrollador Frontend",
    "Creador de Experiencias Digitales",
    "Constructor de Interfaces",
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let index = 0;
    let timeoutId;

    const typeText = () => {
      if (index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1));
        index++;
        timeoutId = setTimeout(typeText, 100);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    };

    typeText();

    // Cleanup function to clear timeout when component unmounts or effect re-runs
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentIndex]);

  return (
    <section id="intro" className="pt-24 md:pt-36 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Wrapper className="px-5 pb-8">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <div className="rounded-full border-2 border-primary size-[150px]">
              <Image src="/images/photo.jpeg" width={150} height={150} className="rounded-full" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 animate-fade-in-up">
            <span className="block text-foreground">Andrés Díaz</span>
            <span className="block text-primary glow-text">Desarrollador Frontend</span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl text-secondary min-h-[2rem] flex items-center">
              <span className="typing-animation">{displayText}</span>
            </p>
          </div>

          <div className="animate-bounce">
            <IoIosArrowForward className="w-6 h-6 mx-auto text-muted-foreground rotate-90" />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 space-y-5 md:gap-4 md:grid-cols-4">
          <div className="flex flex-col col-span-3 space-y-1 items-start text-primary-dark dark:text-primary pb-5 md:pb-0">
            <h1 className="font-medium text-[3.7rem] md:text-[4.2rem] leading-none">Andrés Díaz</h1>
            <h2 className="font-extralight text-4xl md:text-5xl text-primary-dark/70 dark:text-primary/70">
              Desarrollador Web
            </h2>
            <p className="font-light tracking-wide pt-6 md:pt-8 text-primary-dark text-left pr-5 dark:text-primary">
              Soy Desarrollador Web con 2 años de experiencia, enfocado en la construcción de
              aplicaciones modernas y eficientes. He trabajado con startups, pequeñas empresas y
              proyectos individuales, ayudándoles a transformar sus ideas en soluciones digitales.
            </p>
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
        </div> */}
      </Wrapper>
    </section>
  );
};

export default Intro;
