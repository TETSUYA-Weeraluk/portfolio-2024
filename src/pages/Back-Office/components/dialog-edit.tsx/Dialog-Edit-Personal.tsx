import { useEffect, useState } from "react";
import { LibraryIcon, PerosnalInfo } from "../../../Home/type";
import BaseDialogEdit from "./Base-Dialog-Edit";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useAppDispatch } from "../../../../store";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { updatePersonalInfo } from "../../../../store/backOfficeSlice";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

interface DialogEditPersonalProps {
  open: boolean;
  handleClose: () => void;
  data: PerosnalInfo[];
}

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

const DialogEditPersonal = (props: DialogEditPersonalProps) => {
  const { open, handleClose, data } = props;
  const dispatch = useAppDispatch();

  const [openDialogAlert, setOpenDialogAlert] = useState(false);
  const [removeId, setRemoveId] = useState<string[]>([]);

  const libraryIcon = Array.from(Object.values(LibraryIcon));

  const handleCloseDialogAlert = () => {
    setOpenDialogAlert(false);
    handleClose();
  };

  const handleOpenDialogAlert = () => {
    setOpenDialogAlert(true);
  };

  const defaultValues: PerosnalInfo[] = [
    {
      id: "",
      title: "",
      description: "",
      libraryIcon: LibraryIcon.Fa,
      icon: "",
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
    const value = getValues("items") as PerosnalInfo[];

    dispatch(
      updatePersonalInfo({ id: id, data: value, removeId: removeId })
    ).then((res) => {
      const newData = res.payload as PerosnalInfo[];

      if (newData && newData.length > 0) {
        handleOpenDialogAlert();
        setValue("personalInfo", newData);
      }
    });
  };

  const addPersonalInfo = () => {
    const data = {
      id: "",
      title: "",
      description: "",
      libraryIcon: LibraryIcon.Fa,
      icon: "",
      order: fields.length + 1,
    };

    append(data);
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
        <h1 className="text-xl font-bold">Personal Information</h1>
        <div className="flex items-center gap-1">
          <h1 className="text-lg">Icon :</h1>
          <a href="https://react-icons.github.io/react-icons">
            https://react-icons.github.io/react-icons
          </a>
        </div>

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
                    <TextField
                      label="Title"
                      className="w-full"
                      {...field}
                      placeholder="Title"
                    />
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
                      placeholder="Description"
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name={`items.${index}.libraryIcon`}
                  control={control}
                  render={({ field }) => (
                    <FormControl className="w-full">
                      <InputLabel id="demo-simple-select-label">
                        Type Icon
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type Icon"
                        sx={{ width: "100%" }}
                        {...field}
                      >
                        {libraryIcon.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </div>

              <div>
                <Controller
                  name={`items.${index}.icon`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Icon"
                      className="w-full"
                      {...field}
                      placeholder="Icon"
                      InputProps={{
                        endAdornment: dynamicIcon(
                          field.value,
                          getValues(`items.${index}.libraryIcon`)
                        ),
                      }}
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
          onClick={addPersonalInfo}
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

export default DialogEditPersonal;
