const CardExperience = ({ experience }) => {
  return (
    <article className="gap-5 grid text-gray-600 dark:text-secondary bg-white dark:bg-gray-50/5 rounded-xl border dark:border-gray-50/10 p-8 duration-200 hover:bg-white card-hover hover:border-primary-light dark:hover:border-primary">
      <div className="flex justify-start flex-col md:flex-row md:justify-between items-start md:items-center font-semibold text-xl gap-y-2 lg:gap-y-0">
        <div className="flex items-start font-semibold flex-col dark:text-white justify-start">
          <h3 className="!text-xl text-black dark:text-white">{experience.job}</h3>
          <h4 className="text-primary-light dark:text-primary text-sm">{experience.company}</h4>
        </div>

        <div className="text-xs font-medium space-x-2">
          <span className="border px-2 py-0.5 text-accent-light border-accent-light dark:text-forty dark:border-forty rounded-full">
            {experience.date}
          </span>
          {experience.currentJob && (
            <span className="px-2 text-white dark:text-black border border-primary-light dark:border-primary py-0.5 dark:bg-primary bg-primary-light rounded-full">
              Actual
            </span>
          )}
        </div>
      </div>
      <ul>
        {experience.functions.map((f) => (
          <div
            key={f.item}
            className="flex items-start md:items-center space-x-3 font-light text-sm space-y-3"
          >
            <span className="text-forty mr-2 mt-1.5">•</span>
            <li className="w-full -top-2.5 md:top-0 relative">{f.item}</li>
          </div>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-stone-100 dark:bg-gray-50/5 text-[13px] hover:cursor-default rounded-full text-muted-foreground hover:bg-primary-light/10 dark:hover:bg-primary/10 dark:hover:text-primary transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default CardExperience;
