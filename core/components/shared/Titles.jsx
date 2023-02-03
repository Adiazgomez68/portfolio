export const MainTitle = ({ text = "", className = "" }) => {
  return <h1 className={`${className} font-semibold text-4xl `}>{text}</h1>;
};

export const SubTitle = ({ text = "", className = "" }) => {
  return <h2 className={`${className} font-bold text-2xl`}>{text}</h2>;
};

export const ThirdTitle = ({ text = "", className = "" }) => {
  return <h3 className={`${className} font-bold text-xl`}> {text} </h3>;
};

export const ForthTitle = ({ text = "", className = "" }) => {
  return <h3 className={`${className} font-bold text-md`}> {text} </h3>;
};
