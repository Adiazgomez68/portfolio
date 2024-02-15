import { IconSelector } from "../../shared/icons/Technologies";

const TechnologiesList = ({ icon, color }) => {
  return (
    <span
      title={icon.name}
      className="flex items-center p-2 bg-gray-200 rounded-full text-primary"
    >
      {IconSelector(icon.id)}
    </span>
  );
};

export default TechnologiesList;
