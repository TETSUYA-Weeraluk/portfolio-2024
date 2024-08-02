import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { Education } from "../../../Home/type";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { updateEducation } from "../../../../store/backOfficeSlice";
import BaseDialogEdit from "./Base-Dialog-Edit";
import { Button, IconButton, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { FaRegTrashAlt } from "react-icons/fa";

interface DialogEditEducationProps {
  open: boolean;
  handleClose: () => void;
  data: Education[];
}

const defaultValues: Education[] = [
  {
    id: "",
    school: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
    order: 1,
  },
];

const DialogEditEducation = (props: DialogEditEducationProps) => {
  const { open, handleClose, data } = props;
  const dispatch = useAppDispatch();

  const [openDialogAlert, setOpenDialogAlert] = useState(false);
  const [removeId, setRemoveId] = useState<string[]>([]);

  const { control, reset, getValues } = useForm({
    defaultValues: {
      items: defaultValues,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "items",
  });

  const { setValue, watch } = useFormContext();

  const id = watch("id");

  useEffect(() => {
    reset({ items: data });
  }, [reset, data]);

  const updateData = () => {
    const newData = getValues("items") as Education[];

    dispatch(updateEducation({ id: id, data: newData })).then((res) => {
      const newData = res.payload as Education[];

      if (newData && newData.length > 0) {
        handleOpenDialogAlert();
        setValue("education", newData);
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

  const addSchool = () => {
    append(defaultValues[0]);
  };

  const removeSchool = (index: number) => {
    if (fields[index].id) {
      setRemoveId([...removeId, fields[index].id]);
    }
    remove(index);
  };

  return (
    <BaseDialogEdit
      open={open}
      handleClose={handleClose}
      handleCloseDialogAlert={handleCloseDialogAlert}
      openDialogAlert={openDialogAlert}
      updateData={updateData}
    >
      <div className="w-full space-y-4">
        <h1 className="text-xl font-bold">Education</h1>

        {fields.map((item, index) => (
          <div key={item.id + index}>
            <div className="flex justify-end">
              <IconButton
                aria-label="edit"
                color="inherit"
                onClick={() => removeSchool(index)}
              >
                <FaRegTrashAlt />
              </IconButton>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b p-4 items-center">
              <div>
                <Controller
                  name={`items.${index}.school`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="School" className="w-full" {...field} />
                  )}
                />
              </div>

              <div>
                <Controller
                  name={`items.${index}.location`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Location" className="w-full" {...field} />
                  )}
                />
              </div>

              <div>
                <Controller
                  name={`items.${index}.description`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Description"
                      className="w-full"
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col justify-end h-full">
                <div className=" flex items-center gap-4">
                  <Controller
                    name={`items.${index}.startDate`}
                    control={control}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          className="w-full"
                          label="Start date"
                          {...field}
                          value={dayjs(field.value)}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  <Controller
                    name={`items.${index}.endDate`}
                    control={control}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          className="w-full"
                          label="End date"
                          {...field}
                          value={dayjs(field.value)}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  <Controller
                    name={`items.${index}.order`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label="Order"
                        type="number"
                        className="w-full"
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          type="button"
          onClick={addSchool}
          sx={{
            width: "100%",
            backgroundColor: "#0096FF",
            color: "#fff",
            "&:hover": {
              color: "#0096FF",
              backgroundColor: "#fff",
            },
          }}
        >
          + Add SCHOOL
        </Button>
      </div>
    </BaseDialogEdit>
  );
};

export default DialogEditEducation;
