import { useTheme } from "next-themes";

const HorizontalLine = ({ className = "" }) => {
  const { theme } = useTheme();

  return (
    <picture
      className={`absolute right-0 w-3/4 max-w-screen-sm 2xl:hidden ${className}`}
    >
      <img
        src="/images/Horizontal-Line.svg"
        alt="Separator"
        className={theme === "light" ? "opacity-[0.28]" : "opacity-100"}
      />
    </picture>
  );
};

export default HorizontalLine;
