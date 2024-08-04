import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { Projects } from "../../../Home/type";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import BaseDialogEdit from "./Base-Dialog-Edit";
import { Button, IconButton, TextField } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { updateProject } from "../../../../store/backOfficeSlice";

interface DialogEditProjectProps {
  open: boolean;
  handleClose: () => void;
  data: Projects[];
}

const DialogEditProject = (props: DialogEditProjectProps) => {
  const { open, handleClose, data } = props;

  const dispatch = useAppDispatch();

  const [openDialogAlert, setOpenDialogAlert] = useState(false);
  const [removeId, setRemoveId] = useState<string[]>([]);

  const handleCloseDialogAlert = () => {
    setOpenDialogAlert(false);
    handleClose();
  };

  const handleOpenDialogAlert = () => {
    setOpenDialogAlert(true);
  };

  const defaultValues: Projects[] = [
    {
      id: "",
      title: "",
      image: "",
      description: "",
      link_github: "",
      link_demo: "",
      order: 1,
    },
  ];

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
    const value = getValues("items") as Projects[];

    const newData = value.map((item) => {
      return {
        ...item,
        order: parseInt(item.order.toString()),
      };
    });

    dispatch(updateProject({ id: id, data: newData, removeId: removeId })).then(
      (res) => {
        const newData = res.payload as Projects[];

        if (newData && newData.length > 0) {
          handleOpenDialogAlert();
          setValue("project", newData);
        }
      }
    );
  };

  const addProject = () => {
    append(defaultValues[0]);
  };

  const removePersonalInfo = (index: number) => {
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
        <h1 className="text-xl font-bold">Project</h1>

        {fields.map((field, index) => (
          <div key={field.id + index}>
            <div className="flex justify-between">
              <h1 className="text-lg">Row {index + 1}</h1>
              <IconButton
                aria-label="edit"
                color="inherit"
                onClick={() => removePersonalInfo(index)}
              >
                <FaRegTrashAlt />
              </IconButton>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b p-4">
              <div>
                <Controller
                  name={`items.${index}.title`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Title" className="w-full" {...field} />
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
              <div>
                <Controller
                  name={`items.${index}.image`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Image" className="w-full" {...field} />
                  )}
                />
              </div>
              <div>
                <Controller
                  name={`items.${index}.link_github`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Link Github"
                      className="w-full"
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name={`items.${index}.link_demo`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Link Demo"
                      className="w-full"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
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
        ))}

        <Button
          type="button"
          onClick={addProject}
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
          + Add Item
        </Button>
      </div>
    </BaseDialogEdit>
  );
};

export default DialogEditProject;
