export const MainTitle = ({ text = "", className = "" }) => {
  return <h1 className={`${className} font-semibold text-6xl `}>{text}</h1>;
};

export const SubTitle = ({ text = "", className = "" }) => {
  return <h2 className={`${className} font-bold text-2xl`}>{text}</h2>;
};

export const ThirdTitle = ({ text = "", className = "" }) => {
  return <h3 className={`${className} font-semibold text-xl`}> {text} </h3>;
};

export const ForthTitle = ({ text = "", className = "" }) => {
  return <h3 className={`${className} font-semibold text-[17px]`}> {text} </h3>;
};

export const FifthTitle = ({ text = "", className = "" }) => {
  return <h3 className={`${className} font-semibold text-[15px]`}> {text} </h3>;
};
