import { Divider } from "@mui/joy";
import { useFormContext } from "react-hook-form";
import { Education } from "../../Home/type";
import ButtonEditComponent from "./ButtonEdit.component";
import { useState } from "react";
import DialogEditEducation from "./dialog-edit.tsx/Dialog-Edit-Education";

const EducationBO = () => {
  const [open, setOpen] = useState(false);
  const { watch } = useFormContext();
  const education = watch("education") as Education[];

  const convertDateToYear = (date: string) => {
    return new Date(date).getFullYear().toString();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
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

      <div>
        <ButtonEditComponent handleClickOpen={handleClickOpen} />
      </div>
      {open && (
        <DialogEditEducation
          open={open}
          handleClose={() => handleClickClose()}
          data={education}
        />
      )}
    </div>
  );
};

export default EducationBO;
