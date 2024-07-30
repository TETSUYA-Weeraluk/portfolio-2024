import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import PersonalItemBO from "./PersonalItem-BO";
import EducationBO from "./Education-BO";

const AboutMeBO = () => {
  const aboutMe = useSelector((state: RootState) => state.home.portfolio);

  return (
    <div
      className="grid sm:grid-cols-2 gap-4 items-center justify-center"
      id="about-me"
    >
      <div className="mx-auto h-full">
        <img
          className="h-full w-[250px] object-cover rounded-md shadow-image-about-me"
          src={`/assets/${aboutMe.imageAboutMe}`}
          alt="about-me-about"
        />
      </div>
      <div className="wrapper-content">
        <div className="wrapper-content">
          <h1 className=" underline-offset-8 underline text-title">About me</h1>
          <p className="text-base-web">{aboutMe.content}</p>
          <PersonalItemBO />
        </div>

        <div className="w-full border opacity-50"></div>

        <EducationBO />
      </div>
    </div>
  );
};

export default AboutMeBO;
