import { useEffect } from "react";
import HeaderDefault from "../../components/Header/HeaderDefault";
import AboutMeComponent from "./components/AboutMe.component";

import ProjectComponent from "./components/Project.component";
import SkillComponent from "./components/Skill.component";
import TopContentComponent from "./components/TopContent.component";
import "./home.css";
import { Element } from "react-scroll";
import { useAppDispatch } from "../../store";
import { fetchPortfolio } from "../../store/homeSlice";
import ExperienceComponent from "./components/ExperienceComponent";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  return (
    <div className="wrapper-content text-tertiary gap-16">
      <div className="w-full bg-image min-h-screen max-h-screen">
        <HeaderDefault />
        <TopContentComponent />
      </div>

      <Element className="padding-content space-y-10" name="about-me">
        <AboutMeComponent />
      </Element>

      <Element className="padding-content space-y-10" name="experience">
        <ExperienceComponent />
      </Element>

      <Element className="padding-content space-y-10" name="skill">
        <SkillComponent />
      </Element>

      <Element className="padding-content space-y-10 mb-10" name="project">
        <ProjectComponent />
      </Element>
    </div>
  );
}
