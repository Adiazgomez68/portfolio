export const MainTitle = ({ text = "", className = "" }) => {
  return <h1 className={`${className} font-semibold text-4xl `}>{text}</h1>;
};

export const SubTitle = () => {
  return <h2 className={`${className} font-bold text-2xl`}>{text}</h2>;
};
