import ImageProjectBO from "./ImageProject-BO";
import DialogEditSkill from "./dialog-edit.tsx/Dialog-Edit-Skill";
import ButtonEditComponent from "./ButtonEdit.component";
import { Skills } from "../../Home/type";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const SkillBO = () => {
  const [open, setOpen] = useState(false);
  const { watch } = useFormContext();
  const skills = watch("skill") as Skills[];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <div className="text-title text-center underline-offset-8 underline">
          Skill
        </div>
        <ButtonEditComponent handleClickOpen={handleClickOpen} />
      </div>

      <div className="flex flex-wrap gap-4">
        {skills &&
          skills.map((skill) => (
            <div key={skill.title} className="space-y-4 p-4 rounded-lg">
              <h1 className="text-sub-title text-secondary">{skill.title}</h1>
              <div className="wrapper-header p-0 flex-wrap">
                {skill.skillDescription &&
                  skill.skillDescription.map((skilldes) => (
                    <div
                      key={skilldes.description}
                      className="wrapper-content-center"
                    >
                      <ImageProjectBO skill>
                        <span className="text-tertiary">
                          <img
                            className="image-skill"
                            src={`assets/${skilldes.image}`}
                            alt={skilldes.image}
                          />
                        </span>
                      </ImageProjectBO>
                      <span className="text-base-web">
                        {skilldes.description}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>

      {open && (
        <DialogEditSkill
          open={open}
          handleClose={() => handleClickClose()}
          data={skills}
        />
      )}
    </>
  );
};

export default SkillBO;
