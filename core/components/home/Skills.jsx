import Wrapper from "../shared/Wrapper";
import LogoLoop from "../motions/LogoLoop";
import { techLogos } from "../../utils/items";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  let fadeOutColor = "";

  if (currentTheme === "dark") {
    fadeOutColor = "#12181D";
  } else {
    fadeOutColor = "#EEEEEE";
  }

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return;

  return (
    <section id="skills" className="w-full mt-12">
      <Wrapper className="flex-col pb-10 space-y-11 px-10">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={35}
          gap={45}
          pauseOnHover
          scaleOnHover
          fadeOut={true}
          fadeOutColor={fadeOutColor}
          ariaLabel="Technologies & Skills"
        />
      </Wrapper>
    </section>
  );
};

export default Skills;
