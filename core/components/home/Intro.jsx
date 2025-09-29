import { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { IoIosArrowForward } from "../shared/icons/Arrows";
import { useTheme } from "next-themes";

const Intro = () => {
  const { theme } = useTheme();
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

  const patternColor =
    theme === "dark" ? "radial-gradient(hsl(var(--primary))" : "radial-gradient('#D7E1F5')";

  return (
    <section id="intro" className="pt-24 md:pt-36 md:pb-24 relative">
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${theme === "dark" ? "opacity-20" : "opacity-30"}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `${patternColor} 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Wrapper className="px-5 pb-8">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <div className="rounded-full dark:border-2 border-[3px] border-primary-light dark:border-primary size-[150px]">
              <Image src="/images/photo.jpeg" width={150} height={150} className="rounded-full" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 animate-fade-in-up">
            <span className="block text-foreground">Andrés Díaz</span>
            <span className="block dark:text-primary text-primary-light glow-text">
              Desarrollador Frontend
            </span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl text-gray-600 dark:text-secondary min-h-[2rem] flex items-center">
              <span className="typing-animation">{displayText}</span>
            </p>
          </div>

          <div className="animate-bounce">
            <IoIosArrowForward className="w-6 h-6 mx-auto text-gray-600/50 dark:text-muted-foreground rotate-90" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Intro;
