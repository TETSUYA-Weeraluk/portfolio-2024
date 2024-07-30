import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const PersonalInformaltionComponent = () => {
  const personalList = useSelector(
    (state: RootState) => state.home.portfolio.personalInfo
  );
  const dynamicIcon = (icon: string, library: "Fa" | "Md") => {
    switch (library) {
      case "Fa": {
        const Icon = FaIcons[icon as keyof typeof FaIcons];
        return Icon && <Icon fontSize="20" />;
      }
      case "Md": {
        const Icon = MdIcons[icon as keyof typeof MdIcons];
        return Icon && <Icon fontSize="20" />;
      }
      default:
        return null;
    }
  };

  return (
    <div className="wrapper-child-content">
      <h1 className="text-sub-title text-secondary">Personal Information</h1>
      <div className="w-full">
        {personalList &&
          personalList.map((list) => (
            <p
              key={list.title}
              className="text-base-web items-stretch flex gap-1"
            >
              {dynamicIcon(list.icon, list.libraryIcon)}

              <span>{list.title} : </span>
              <span>{list.description}</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default PersonalInformaltionComponent;
