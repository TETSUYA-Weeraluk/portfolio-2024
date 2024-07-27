import HeaderDefault from "../../components/Header/HeaderDefault";
import AboutMeComponent from "./components/AboutMe.component";
import ProjectComponent from "./components/Project.component";
import SkillComponent from "./components/Skill.component";
import TopContentComponent from "./components/TopContent.component";
import "./home.css";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="wrapper-content text-tertiary gap-6">
      <div className="w-full bg-image min-h-screen max-h-screen">
        <HeaderDefault />
        <TopContentComponent />
      </div>

      <Element className="padding-content" name="about-me">
        <AboutMeComponent />
      </Element>

      <Element className="padding-content" name="experience">
        <h1 className="text-center text-3xl font-bold">Experience</h1>
      </Element>

      <Element className="padding-content space-y-4" name="skill">
        <SkillComponent />
      </Element>

      <Element className="padding-content space-y-4" name="project">
        <ProjectComponent />
      </Element>

      <Element className="padding-content" name="contact">
        <h1 className="text-center text-3xl font-bold">Contact</h1>
      </Element>
    </div>
  );
}
