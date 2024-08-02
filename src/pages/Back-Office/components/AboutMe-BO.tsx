import PersonalItemBO from "./PersonalItem-BO";
import EducationBO from "./Education-BO";
import ButtonEditComponent from "./ButtonEdit.component";
import { useState } from "react";
import DialogEditAboutMe from "./dialog-edit.tsx/Dialog-Edit-AboutMe";
import { useFormContext } from "react-hook-form";

const AboutMeBO = () => {
  const [open, setOpen] = useState(false);

  const { watch } = useFormContext();

  const imageAboutMe = watch("imageAboutMe");
  const content = watch("content");
  const id = watch("id");

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className="grid sm:grid-cols-2 gap-4 items-center justify-center"
      id="about-me"
    >
      <div className="mx-auto h-full">
        <img
          className="h-full w-[250px] object-cover rounded-md shadow-image-about-me"
          src={`/assets/${imageAboutMe}`}
          alt="about-me-about"
        />
      </div>
      <div className="wrapper-content">
        <div className="wrapper-content">
          <h1 className=" underline-offset-8 underline text-title">About me</h1>
          <p className="text-base-web">{content}</p>
          <div>
            <ButtonEditComponent handleClickOpen={handleClickOpen} />
            {open && (
              <DialogEditAboutMe
                open={open}
                handleClose={() => setOpen(false)}
                data={{
                  id: id,
                  content: content,
                }}
              />
            )}
          </div>
          <PersonalItemBO />
        </div>

        <div className="w-full border opacity-50"></div>

        <EducationBO />
      </div>
    </div>
  );
};

export default AboutMeBO;
