import { useEffect, useState } from "react";
import { Experience } from "../../../Home/type";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Button, IconButton, TextField } from "@mui/material";
import BaseDialogEdit from "./Base-Dialog-Edit";
import { FaRegTrashAlt } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useAppDispatch } from "../../../../store";
import { updateExperience } from "../../../../store/backOfficeSlice";

interface DialogEditExperienceProps {
  open: boolean;
  handleClose: () => void;
  data: Experience[];
}

const defaultValues: Experience[] = [
  {
    id: "",
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    experienceDescription: [
      {
        id: "",
        description: "",
      },
    ],
    order: 1,
  },
];

const DialogEditExperience = (props: DialogEditExperienceProps) => {
  const { open, handleClose, data } = props;
  const dispatch = useAppDispatch();

  const [openDialogAlert, setOpenDialogAlert] = useState(false);
  const [removeId, setRemoveId] = useState<string[]>([]);
  const [removeIdDescription, setRemoveIdDescription] = useState<
    { index: number; id: string }[]
  >([]);

  const { control, reset, getValues } = useForm({
    defaultValues: {
      items: defaultValues,
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control: control,
    name: "items",
  });

  const { setValue, watch } = useFormContext();

  const id = watch("id");

  useEffect(() => {
    reset({ items: data });
  }, [reset, data]);

  const updateData = () => {
    const value = getValues("items") as Experience[];
    const data = value.map((item, index) => {
      const removeIdExpDesc = removeIdDescription
        .filter((desc) => desc.index === index)
        .map((desc) => desc.id);

      return {
        ...item,
        order: Number(item.order),
        removeIdExpDesc: removeIdExpDesc,
      };
    });

    dispatch(updateExperience({ id: id, data: data, removeId: removeId })).then(
      (res) => {
        const newData = res.payload as Experience[];

        if (newData && newData.length > 0) {
          handleOpenDialogAlert();
          setValue("experience", newData);
        }
      }
    );
  };

  const handleCloseDialogAlert = () => {
    setOpenDialogAlert(false);
    handleClose();
  };

  const handleOpenDialogAlert = () => {
    setOpenDialogAlert(true);
  };

  const addExperience = () => {
    append(defaultValues[0]);
  };

  const addRowExperineceDescription = (index: number) => {
    update(index, {
      ...data[index],
      experienceDescription: [
        ...fields[index].experienceDescription,
        { id: "", description: "" },
      ],
    });
  };

  const removeRowExperineceDescription = (index: number, indexDesc: number) => {
    update(index, {
      ...data[index],
      experienceDescription: [
        ...fields[index].experienceDescription.filter(
          (_, i) => i !== indexDesc
        ),
      ],
    });

    if (fields[index].experienceDescription[indexDesc].id) {
      setRemoveIdDescription([
        {
          index: index,
          id: data[index].experienceDescription[indexDesc].id,
        },
      ]);
    }
  };

  const removeSchool = (index: number) => {
    if (fields[index].id) {
      setRemoveId([...removeId, data[index].id]);
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
        <h1 className="text-xl font-bold">Experience</h1>
        {fields.map((item, index) => (
          <div className="border-b p-4 space-y-4" key={item.id + index}>
            <div className="flex justify-end">
              <IconButton
                aria-label="edit"
                color="inherit"
                onClick={() => removeSchool(index)}
              >
                <FaRegTrashAlt />
              </IconButton>
            </div>
            <div className="grid grid-cols-2 gap-4  items-center">
              <div>
                <Controller
                  name={`items.${index}.company`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Company" className="w-full" {...field} />
                  )}
                />
              </div>

              <div>
                <Controller
                  name={`items.${index}.position`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Position" className="w-full" {...field} />
                  )}
                />
              </div>

              <div className="flex flex-col justify-end h-full col-span-2">
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

            <div className="flex flex-col gap-4">
              {fields[index].experienceDescription.map((desc, indexDesc) => (
                <div
                  key={desc.id + indexDesc}
                  className="flex items-center gap-4"
                >
                  <Controller
                    name={`items.${index}.experienceDescription.${indexDesc}.description`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label="Description"
                        className="w-full"
                        {...field}
                      />
                    )}
                  />
                  <IconButton
                    aria-label="edit"
                    color="inherit"
                    onClick={() =>
                      removeRowExperineceDescription(index, indexDesc)
                    }
                  >
                    <FaRegTrashAlt />
                  </IconButton>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => addRowExperineceDescription(index)}
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
                + Add Experience Description
              </Button>
            </div>
          </div>
        ))}

        <Button
          type="button"
          onClick={addExperience}
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
          + Add Experience
        </Button>
      </div>
    </BaseDialogEdit>
  );
};

export default DialogEditExperience;
