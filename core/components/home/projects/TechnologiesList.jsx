const TechnologiesList = ({ name }) => {
  return (
    <span
      title={name}
      className="flex items-center justify-center text-sm rounded-sm font-normal
        text-secondary bg-secondary/10 uppercase py-1 px-2 hover:bg-secondary/10
        duration-200 font-inconsolada cursor-default"
    >
      {name}
    </span>
  );
};

export default TechnologiesList;
