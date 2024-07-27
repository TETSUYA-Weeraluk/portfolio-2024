import HeaderDefault from "../../components/Header/HeaderDefault";
import TopContentComponent from "./components/TopContent.component";
import "./home.css";
import aboutMeImage from "../../assets/26171.jpg";
import { Element } from "react-scroll";

export default function Home() {
  const listAboueMe = [
    {
      title: "Name",
      value: "Weeraluk Sopapan",
      icons: "",
    },
    {
      title: "Date of Birth",
      value: "08/07/1998",
    },
    {
      title: "Email",
      value: "Weeraluk.sopa@gmail.com",
    },
    {
      title: "Phone",
      value: "064-0534466",
    },
  ];
  return (
    <div className="text-tertiary">
      <div className="w-full bg-image min-h-screen max-h-screen">
        <HeaderDefault />
        <TopContentComponent />
      </div>
      <div className="padding-content py-4">
        <div
          className="grid sm:grid-cols-2 gap-4 items-stretch justify-center"
          id="about-me"
        >
          <div className="mx-auto">
            <img
              className="h-[300px] w-[300px] object-cover rounded-md shadow-image-about-me"
              src={aboutMeImage}
              alt="about-me-about"
            />
          </div>
          <Element className="flex-col-gap" name="about-me">
            <div className="flex-col-gap">
              <h1 className="text-4xl underline-offset-8 underline text-secondary font-bold">
                About me
              </h1>
              <p className="text-lg">
                I have 1 year of experience in web application development,
                specializing in JavaScript and TypeScript. I am skilled in
                developing web applications using React and Angular. My career
                objective is to become Fullstack Developer. I hold a Bachelor's
                degree in Computer Science from Bangkok University.
              </p>
              <div className="">
                <h1 className="text-2xl text-primary">Personal Information</h1>
                {listAboueMe &&
                  listAboueMe.map((list, index) => (
                    <p key={index} className="text-lg flex items-center gap-1">
                      <span>{list.title} : </span>
                      <span>{list.value}</span>
                    </p>
                  ))}
              </div>
            </div>
            <div className="w-full border opacity-50"></div>

            <div className="flex-col-gap">
              <h1 className="text-2xl text-primary">Education</h1>
              <div className="w-full">
                <p className="flex justify-between text-lg">
                  <span>Bangkok University</span>
                  <span>Pathum thani</span>
                </p>
                <p className="flex justify-between italic">
                  <span>Bachelor's degree in Computer Science. 2.89 GPA</span>
                  <span>2017-2021</span>
                </p>
              </div>
            </div>
          </Element>
        </div>
      </div>
    </div>
  );
}
