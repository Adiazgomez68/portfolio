const AppLogo = ({ className }) => {
  return (
    <picture className={`flex items-center w-full  ${className}`}>
      <img
        src="/public/favicon.ico"
        alt="Logo portfolio"
        width={100}
        height={0}
        className="w-full"
      />
    </picture>
  );
};

export default AppLogo;
