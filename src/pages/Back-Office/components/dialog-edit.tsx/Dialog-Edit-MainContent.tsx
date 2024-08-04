import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { useAppDispatch } from "../../../../store";
import { updateMainContent } from "../../../../store/backOfficeSlice";
import { MainContent, ResponseAPI } from "../../type";
import BaseDialogEdit from "./Base-Dialog-Edit";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DialogEditActions from "./Dialog-Edit-Actions";
interface DialogEditWelcomeProps {
  open: boolean;
  handleClose: () => void;
  data: MainContent;
}

const schema = z.object({
  name: z.string().min(3).max(255),
  nickname: z.string().min(3).max(255),
  position: z.string().min(3).max(255),
  welcomeText: z.string().min(3),
  image: z.string().nullable(),
});

const DialogEditWelcome = (props: DialogEditWelcomeProps) => {
  const { open, handleClose, data } = props;
  const dispatch = useAppDispatch();
  const [openDialogAlert, setOpenDialogAlert] = useState(false);

  const defaultValues = {
    id: "",
    name: "Tee",
    nickname: "",
    position: "",
    welcomeText: "",
    image: "",
  };

  const {
    control,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const { setValue } = useFormContext();

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  const handleCloseDialogAlert = () => {
    setOpenDialogAlert(false);
    handleClose();
  };

  const handleOpenDialogAlert = () => {
    setOpenDialogAlert(true);
  };

  const onSubmit = (data: MainContent) => {
    dispatch(
      updateMainContent({
        id: data.id,
        data: data,
      })
    ).then((res) => {
      const newData = res.payload as ResponseAPI<MainContent>;
      if (newData) {
        setValue("name", newData.data.name);
        setValue("nickname", newData.data.nickname);
        setValue("position", newData.data.position);
        setValue("welcomeText", newData.data.welcomeText);
        setValue("image", newData.data.image);
        handleOpenDialogAlert();
      } else {
        console.log("Error");
      }
    });
  };

  console.log(isValid);

  return (
    <BaseDialogEdit
      open={open}
      openDialogAlert={openDialogAlert}
      handleClose={handleClose}
      handleCloseDialogAlert={handleCloseDialogAlert}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full space-y-4">
          <h1 className="text-xl font-bold">Main content</h1>
          <div className="flex items-baseline gap-4 space-y-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Name"
                  className="w-full"
                  {...field}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              )}
            />

            <Controller
              name="nickname"
              control={control}
              render={({ field }) => (
                <TextField label="Nickname" className="w-full" {...field} />
              )}
            />

            <Controller
              name="position"
              control={control}
              render={({ field }) => (
                <TextField label="Position" className="w-full" {...field} />
              )}
            />
          </div>
          <Controller
            name="welcomeText"
            control={control}
            render={({ field }) => (
              <TextField
                label="Welcome Text"
                className="w-full"
                {...field}
                placeholder="Hi"
                multiline
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <div className="space-y-4">
                <TextField label="Image" className="w-full" {...field} />
                <img src={field.value} alt="" />
              </div>
            )}
          />
        </div>

        <DialogEditActions disabled={!isValid} handleClose={handleClose} />
      </form>
    </BaseDialogEdit>
  );
};

export default DialogEditWelcome;
