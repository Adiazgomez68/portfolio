import { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { IoIosArrowForward } from "../shared/icons/Arrows";
import { useTheme } from "next-themes";
import Particles from "../motions/Particles";
import BlurText from "../motions/BlurText";
import TextType from "../motions/TextType";
import ElectricBorder from "../motions/ElectricBorder";

const Intro = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const texts = [
    "+3 años de experiencia",
    "Creador de Experiencias Digitales",
    "Constructor de Interfaces",
  ];

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  let particleColors = "";
  let textTypeColors = "";
  let electricBorderColor = "";

  if (currentTheme === "dark") {
    particleColors = ["#ffffff", "#00ffff"];
    textTypeColors = ["#C7C7C7"];
    electricBorderColor = "#7df9ff";
  } else {
    particleColors = ["#ffffff", "#2463EB"];
    textTypeColors = ["#4B5563"];
    electricBorderColor = "#222a49";
  }

  return (
    <section id="intro" className="pt-24 md:pt-36 md:pb-24 relative">
      {mounted && (
        <div
          className="hidden lg:block"
          style={{ width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "20" }}
        >
          <Particles
            key={currentTheme}
            particleColors={particleColors}
            particleCount={350}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={60}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      )}

      <Wrapper className="px-5 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-8 relative z-20">
            <ElectricBorder
              color={electricBorderColor}
              speed={1}
              chaos={0.6}
              thickness={2}
              className="hidden lg:block"
              style={{ borderRadius: "100%", width: "180px", height: "180px" }}
            >
              <div className="rounded-full border-2 border-primary-light dark:border-primary size-[180px] relative top-0.5">
                <Image src="/images/photo.jpeg" width={180} height={180} className="rounded-full" />
              </div>
            </ElectricBorder>

            <div className="rounded-full border-2 border-primary-light dark:border-primary size-[180px] relative top-0.5 lg:hidden block">
              <Image src="/images/photo.jpeg" width={180} height={180} className="rounded-full" />
            </div>
          </div>

          <h1 className="text-5xl flex flex-col items-center justify-center md:text-6xl font-semibold mb-6 animate-fade-in-up">
            <BlurText
              text="Andrés Díaz"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-foreground"
            />
            <BlurText
              text="Desarrollador Frontend"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="dark:text-primary text-primary-light glow-text justify-center"
            />
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl min-h-[2rem] flex items-center text-gray-600 dark:text-secondary">
              {mounted && (
                <TextType
                  text={texts}
                  typingSpeed={75}
                  pauseDuration={2000}
                  deletingSpeed={20}
                  textColors={textTypeColors}
                  showCursor={true}
                  cursorCharacter="_"
                  cursorClassName="dark:text-primary text-primary-light"
                />
              )}
            </p>
          </div>

          <div className="animate-bounce">
            <IoIosArrowForward className="w-6 h-6 mx-auto text-gray-600/50 dark:text-gray-500 rotate-90" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Intro;
