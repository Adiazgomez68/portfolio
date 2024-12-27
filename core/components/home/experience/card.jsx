import { RightArrowTriangle } from "../../shared/icons/Arrows";

const CardExperience = ({ experience }) => {
  return (
    <article className="gap-5 grid text-primary">
      <div className="flex justify-between items-center font-semibold text-xl">
        <h1>{experience.company}</h1>
        <span className="text-sm font-normal">
          {experience.date}
          {experience.currentJob && " (Actual)"}
        </span>
      </div>
      <ul>
        {experience.functions.map((f) => (
          <div
            key={f.item}
            className="flex items-center space-x-3 font-light text-sm space-y-3"
          >
            <RightArrowTriangle className="text-secondary w-3 h-3 relative top-1.5" />
            <li>{f.item}</li>
          </div>
        ))}
      </ul>
      <div className="flex items-center text-sm text-white justify-start font-inconsolada">
        <span className="py-1 px-2 rounded bg-white/10">{experience.job}</span>
      </div>
    </article>
  );
};

export default CardExperience;
