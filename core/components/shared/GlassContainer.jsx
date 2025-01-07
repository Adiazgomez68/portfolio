const BlurContainer = ({ children, className = "" }) => {
  return (
    <div className={`w-full backdrop-blur-xl ${className}`}>{children}</div>
  );
};

export default BlurContainer;
