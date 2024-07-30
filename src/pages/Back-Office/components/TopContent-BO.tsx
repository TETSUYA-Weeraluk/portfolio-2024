import { useState } from "react";
import DialogEditWelcome from "./dialog-edit.tsx/Dialog-Edit-MainContent";
import { useFormContext } from "react-hook-form";
import ButtonEditComponent from "./ButtonEdit.component";

const TopContentBO = () => {
  // const aboutMe = useSelector((state: RootState) => state.home.portfolio);
  const [open, setOpen] = useState(false);

  const { getValues } = useFormContext();

  const aboutMe = {
    id: getValues("id"),
    name: getValues("name"),
    nickname: getValues("nickname"),
    position: getValues("position"),
    welcomeText: getValues("welcomeText"),
    image: getValues("image"),
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper-content-center justify-center home-content-center">
      <img
        className="image-portfolio-hover image-portfolio image-portfolio-hover"
        src={`/assets/${aboutMe.image}`}
        alt="image"
      />
      <div className="wrapper-content-center">
        <div className="wrapper-content-center gap-0">
          <div className="flex items-baseline gap-2">
            <span className="text-title">{aboutMe.name}</span>
            <span className="text-base-web">({aboutMe.nickname})</span>
            <ButtonEditComponent handleClickOpen={handleClickOpen} />
          </div>
          <span className="text-sub-title text-tertiary">
            {aboutMe.position}
          </span>
        </div>
        <span className="text-description-for-job text-description-for-job-hover text-base-web">
          {aboutMe.welcomeText}
        </span>
      </div>

      <DialogEditWelcome data={aboutMe} open={open} handleClose={handleClose} />
    </div>
  );
};

export default TopContentBO;
