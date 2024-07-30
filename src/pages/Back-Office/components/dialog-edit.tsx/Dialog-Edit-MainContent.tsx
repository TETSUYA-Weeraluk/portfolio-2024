import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { useAppDispatch } from "../../../../store";
import { updateMainContent } from "../../../../store/backOfficeSlice";
import { MainContent, ResponseAPI } from "../../type";
import DialogAlert from "../Dialog-alert";

interface DialogEditWelcomeProps {
  open: boolean;
  handleClose: () => void;
  data: MainContent;
}

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

  const { control, reset, getValues } = useForm({
    defaultValues: defaultValues,
  });

  const { setValue } = useFormContext();

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  const updateData = () => {
    const newData = getValues() as MainContent;

    dispatch(
      updateMainContent({
        id: data.id,
        data: newData,
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

  const handleCloseDialogAlert = () => {
    setOpenDialogAlert(false);
    handleClose();
  };

  const handleOpenDialogAlert = () => {
    setOpenDialogAlert(true);
  };

  return (
    <Dialog
      maxWidth="lg"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit</DialogTitle>
      <DialogContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full space-y-2">
            <h1 className="text-base">Name</h1>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField className="w-full" {...field} placeholder="Name" />
              )}
            />
          </div>

          <div className="w-full space-y-2">
            <h1 className="text-base">Nickname</h1>
            <Controller
              name="nickname"
              control={control}
              render={({ field }) => (
                <TextField
                  className="w-full"
                  {...field}
                  placeholder="Nickname"
                />
              )}
            />
          </div>

          <div className="w-full space-y-2">
            <h1 className="text-base">Position</h1>
            <Controller
              name="position"
              control={control}
              render={({ field }) => (
                <TextField
                  className="w-full"
                  {...field}
                  placeholder="Position"
                />
              )}
            />
          </div>
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-base">Welcome Text</h1>
          <Controller
            name="welcomeText"
            control={control}
            render={({ field }) => (
              <TextField className="w-full" {...field} placeholder="Hi" />
            )}
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-base">Image</h1>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <div className="space-y-4">
                <TextField className="w-full" {...field} placeholder="image" />
                <img src={field.value} alt="" />
              </div>
            )}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            backgroundColor: "#C73659",
            color: "white",
            "&:hover": {
              backgroundColor: "#A91D3A",
            },
          }}
          onClick={updateData}
        >
          Update
        </Button>
        <Button
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#C73659",
          }}
          className="button-cancel"
          onClick={handleClose}
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>

      <DialogAlert
        open={openDialogAlert}
        handlecCloseDialogAlert={handleCloseDialogAlert}
      />
    </Dialog>
  );
};

export default DialogEditWelcome;
