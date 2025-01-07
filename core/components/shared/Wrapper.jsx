const Wrapper = ({
  children,
  containerClassName = "",
  className = "",
  maxScreen = "max-w-screen-lg",
}) => {
  return (
    <div className={`flex justify-center w-full h-full ${containerClassName}`}>
      <div className={`flex w-full ${className} ${maxScreen}`}>{children} </div>
    </div>
  );
};

export default Wrapper;
