import DialogEditPersonal from "./dialog-edit.tsx/Dialog-Edit-Personal";
import ButtonEditComponent from "./ButtonEdit.component";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PerosnalInfo } from "../../Home/type";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const dynamicIcon = (icon: string, library: "Fa" | "Md") => {
  switch (library) {
    case "Fa": {
      const Icon = FaIcons[icon as keyof typeof FaIcons];
      return Icon && <Icon fontSize="20" />;
    }
    case "Md": {
      const Icon = MdIcons[icon as keyof typeof MdIcons];
      return Icon && <Icon fontSize="20" />;
    }
    default:
      return null;
  }
};

const PersonalItemBO = () => {
  const [open, setOpen] = useState(false);
  const { watch } = useFormContext();
  const personalList = watch("personalInfo") as PerosnalInfo[];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper-child-content">
      <div className="flex items-center gap-4">
        <h1 className="text-sub-title text-secondary">Personal Information</h1>
        <ButtonEditComponent handleClickOpen={handleClickOpen} />
      </div>
      <div className="w-full">
        {personalList &&
          personalList.map((list) => (
            <p
              key={list.title}
              className="text-base-web items-stretch flex gap-1"
            >
              {dynamicIcon(list.icon, list.libraryIcon)}

              <span>{list.title} : </span>
              <span>{list.description}</span>
            </p>
          ))}
      </div>
      {open && (
        <DialogEditPersonal
          open={open}
          handleClose={() => handleClickClose()}
          data={personalList}
        />
      )}
    </div>
  );
};

export default PersonalItemBO;
