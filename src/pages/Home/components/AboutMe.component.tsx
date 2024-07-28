import aboutMeImage from "../../../assets/26088.jpg";
import EducationComponent from "./Education.component";
import PersonalInformaltionComponent from "./PersonalInformaltion.component";

const AboutMeComponent = () => {
  const summary =
    "I have 1 year of experience in web application development,specializing in JavaScript and TypeScript. I am skilled in developing web applications using React and Angular. My career objective is to become Fullstack Developer. I hold a Bachelor's degree in Computer Science from Bangkok University.";

  return (
    <div
      className="grid sm:grid-cols-2 gap-4 items-center justify-center"
      id="about-me"
    >
      <div className="mx-auto h-full">
        <img
          className="h-full w-[250px] object-cover rounded-md shadow-image-about-me"
          src={aboutMeImage}
          alt="about-me-about"
        />
      </div>
      <div className="wrapper-content">
        <div className="wrapper-content">
          <h1 className=" underline-offset-8 underline text-title">About me</h1>
          <p className="text-base-web">{summary}</p>
          <PersonalInformaltionComponent />
        </div>

        <div className="w-full border opacity-50"></div>

        <EducationComponent />
      </div>
    </div>
  );
};

export default AboutMeComponent;
