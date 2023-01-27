const BlurContainer = ({ children, className = "" }) => {
  return (
    <div className={`w-full backdrop-blur-md ${className}`}>{children}</div>
  );
};

export default BlurContainer;
