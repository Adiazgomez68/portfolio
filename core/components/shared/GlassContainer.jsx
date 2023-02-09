const BlurContainer = ({ children, className = "" }) => {
  return (
    <div className={`w-full backdrop-blur-lg ${className}`}>{children}</div>
  );
};

export default BlurContainer;
