import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { format } from "date-fns";

const ExperienceComponent = () => {
  const listExperience = useSelector(
    (state: RootState) => state.home.portfolio.experience
  );

  const convertDateToMonthYear = (dateString: string) => {
    const date = new Date(dateString);

    return format(date, "MMMM yyyy");
  };

  return (
    <>
      <h1 className="text-title text-center underline-offset-8 underline">
        Experience
      </h1>
      {listExperience &&
        listExperience.length > 0 &&
        listExperience.map((experience, index) => (
          <div className="wrapper-content" key={experience.company}>
            <div key={experience.company} className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-base-web">{experience.company}</span>
                <div className="flex items-center gap-1">
                  <div className="text-base-web space-x-2">
                    <span>{convertDateToMonthYear(experience.startDate)}</span>
                    <span>-</span>
                    <span>{convertDateToMonthYear(experience.endDate)}</span>
                  </div>
                </div>
              </div>
              <span className="text-sm lg:text-base italic">
                {experience.position}
              </span>
              <ul className="text-base-web space-y-4 mt-4">
                {experience.experienceDescription &&
                  experience.experienceDescription.map((desc, index) => (
                    <li key={index}>- {desc.description}</li>
                  ))}
              </ul>
            </div>
            {index !== listExperience.length - 1 && (
              <div className="wrapper-content items-center justify-center w-full mb-4">
                <div className="w-[10px] h-[10px] rounded-full bg-gray-400"></div>
                <div className="h-[100px] w-[1px] bg-gray-500"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-gray-400"></div>
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default ExperienceComponent;
