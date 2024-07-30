import { TextField } from "@mui/material";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { updateAboutMe } from "../../../../store/backOfficeSlice";
import { AboutMeContent } from "../../type";
import BaseDialogEdit from "./Base-Dialog-Edit";

interface DialogEditAboutMeProps {
  open: boolean;
  handleClose: () => void;
  data: AboutMeContent;
}

const DialogEditAboutMe = (props: DialogEditAboutMeProps) => {
  const { open, handleClose, data } = props;
  const dispatch = useAppDispatch();

  const [openDialogAlert, setOpenDialogAlert] = useState(false);

  const defaultValues = {
    id: "",
    content: "",
  };

  const { control, reset, getValues } = useForm({
    defaultValues: defaultValues,
  });

  const { setValue } = useFormContext();

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  const updateData = () => {
    const newData = getValues() as AboutMeContent;

    dispatch(
      updateAboutMe({
        id: data.id,
        data: {
          id: newData.id,
          content: newData.content,
        },
      })
    ).then((res) => {
      const newData = res.payload as AboutMeContent;
      if (newData && newData.content) {
        handleOpenDialogAlert();
        setValue("content", newData.content);
      }
    });

    handleOpenDialogAlert();
  };

  const handleCloseDialogAlert = () => {
    setOpenDialogAlert(false);
    handleClose();
  };

  const handleOpenDialogAlert = () => {
    setOpenDialogAlert(true);
  };

  return (
    <BaseDialogEdit
      open={open}
      handleClose={handleClose}
      handleCloseDialogAlert={handleCloseDialogAlert}
      openDialogAlert={openDialogAlert}
      updateData={updateData}
    >
      <div className="w-full space-y-2">
        <h1 className="text-base">Content</h1>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              className="w-full"
              {...field}
              placeholder="Name"
              multiline
            />
          )}
        />
      </div>
    </BaseDialogEdit>
  );
};

export default DialogEditAboutMe;
