const HorizontalLine = ({ className = "" }) => {
  return (
    <picture className={`absolute right-0 w-3/4 max-w-screen-sm ${className}`}>
      <img src="/images/Horizontal-Line.svg" alt="Separator" />
    </picture>
  );
};

export default HorizontalLine;
