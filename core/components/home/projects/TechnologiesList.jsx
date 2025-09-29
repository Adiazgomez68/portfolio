const TechnologiesList = ({ name }) => {
  return (
    <span
      title={name}
      className="flex items-center px-3 py-1 justify-center rounded-full font-normal
        text-stone-700 dark:text-secondary bg-stone-200/50 hover:bg-secondary/10
        duration-200 cursor-default text-[13px] dark:bg-gray-50/5"
    >
      {name}
    </span>
  );
};

export default TechnologiesList;
