import { Divider } from "@mui/joy";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const EducationComponent = () => {
  const education = useSelector(
    (state: RootState) => state.home.portfolio.education
  );

  const convertDateToYear = (date: string) => {
    return new Date(date).getFullYear().toString();
  };

  return (
    <div className="wrapper-child-content">
      <h1 className="text-sub-title text-secondary">Education</h1>
      <div className="w-full wrapper-child-content space-y-2">
        {education &&
          education.map((list, index) => (
            <div className="w-full space-y-4" key={list.school}>
              <div className="w-full">
                <p className="flex justify-between text-base-web">
                  <span>{list.school}</span>
                  <span>{list.location}</span>
                </p>
                <p className="flex justify-between italic text-sm lg:text-base">
                  <span>{list.description}</span>
                  <span>
                    {convertDateToYear(list.startDate)} -{" "}
                    {convertDateToYear(list.endDate)}
                  </span>
                </p>
              </div>
              {index !== education.length - 1 && <Divider />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EducationComponent;
