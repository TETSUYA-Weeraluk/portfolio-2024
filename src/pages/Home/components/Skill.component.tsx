import { useSelector } from "react-redux";
import ImageProjectComponent from "./ImageProject.component";
import { RootState } from "../../../store";

const SkillComponent = () => {
  const skills = useSelector((state: RootState) => state.home.portfolio.Skill);

  return (
    <>
      <div className="text-title text-center underline-offset-8 underline">
        Skill
      </div>
      <div className="flex flex-wrap gap-4">
        {skills &&
          skills.map((skill) => (
            <div
              key={skill.title}
              className="space-y-4 bg-gradient-to-b from-[#020024]  to-[#c73659] p-4 rounded-lg"
            >
              <h1 className="text-sub-title text-secondary">{skill.title}</h1>
              <div className="wrapper-header p-0 flex-wrap">
                {skill.skillDescription &&
                  skill.skillDescription.map((skilldes) => (
                    <div
                      key={skilldes.description}
                      className="wrapper-content-center"
                    >
                      <ImageProjectComponent skill>
                        <span className="text-tertiary">
                          <img
                            className="image-skill"
                            src={`assets/${skilldes.image}`}
                            alt={skilldes.image}
                          />
                        </span>
                      </ImageProjectComponent>
                      <span className="text-base-web">
                        {skilldes.description}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SkillComponent;
