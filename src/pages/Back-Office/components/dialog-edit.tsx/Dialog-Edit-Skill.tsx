import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { Skills } from "../../../Home/type";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import BaseDialogEdit from "./Base-Dialog-Edit";
import { Button, IconButton, TextField } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { updateSkill } from "../../../../store/backOfficeSlice";

interface DialogEditSkillProps {
  open: boolean;
  handleClose: () => void;
  data: Skills[];
}

const defaultValues: Skills[] = [
  {
    id: "",
    title: "",
    skillDescription: [
      {
        id: "",
        description: "",
        image: "",
        order: 1,
      },
    ],
    order: 1,
  },
];

const DialogEditSkill = (props: DialogEditSkillProps) => {
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
    const value = getValues("items") as Skills[];
    const data = value.map((item, index) => {
      const removeIdExpDesc = removeIdDescription
        .filter((desc) => desc.index === index)
        .map((desc) => desc.id);

      const skillsDescription = item.skillDescription.map((desc) => {
        return {
          ...desc,
          order: Number(desc.order),
        };
      });

      return {
        ...item,
        order: Number(item.order),
        skillDescription: skillsDescription,
        removeIdSkillDesc: removeIdExpDesc,
      };
    });

    dispatch(updateSkill({ id: id, data: data, removeId: removeId })).then(
      (res) => {
        const newData = res.payload as Skills[];

        if (newData && newData.length > 0) {
          handleOpenDialogAlert();
          setValue("skill", newData);
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

  const addSkill = () => {
    append({
      id: "",
      title: "",
      skillDescription: [
        {
          id: "",
          description: "",
          image: "",
          order: 1,
        },
      ],
      order: 1,
    });
  };

  const addRowSkillDescription = (index: number) => {
    const items = getValues("items") as Skills[];

    update(index, {
      ...items[index],
      skillDescription: [
        ...fields[index].skillDescription,
        {
          id: "",
          description: "",
          image: "",
          order: 1,
        },
      ],
    });
  };

  const removeRowSkillDescription = (index: number, indexDesc: number) => {
    const items = getValues("items") as Skills[];

    update(index, {
      ...items[index],
      skillDescription: [
        ...fields[index].skillDescription.filter((_, i) => i !== indexDesc),
      ],
    });

    if (items[index].skillDescription[indexDesc].id) {
      setRemoveIdDescription([
        {
          index: index,
          id: items[index].skillDescription[indexDesc].id,
        },
      ]);
    }
  };

  const removeSkill = (index: number) => {
    const items = getValues("items") as Skills[];

    if (items[index].id) {
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
                onClick={() => removeSkill(index)}
              >
                <FaRegTrashAlt />
              </IconButton>
            </div>
            <div className="grid grid-cols-2 gap-4  items-center">
              <div>
                <Controller
                  name={`items.${index}.title`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Title" className="w-full" {...field} />
                  )}
                />
              </div>

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

            <div className="flex flex-col gap-4">
              {fields[index].skillDescription.map((desc, indexDesc) => (
                <div
                  key={desc.id + indexDesc}
                  className="flex items-center gap-4"
                >
                  <Controller
                    name={`items.${index}.skillDescription.${indexDesc}.description`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label="Description"
                        className="w-full"
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name={`items.${index}.skillDescription.${indexDesc}.image`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label="Image"
                        className="w-full"
                        {...field}
                        InputProps={{
                          endAdornment: (
                            <div>
                              <img
                                className="image-skill"
                                src={`assets/${field.value}`}
                                alt={field.value}
                              />
                            </div>
                          ),
                        }}
                      />
                    )}
                  />
                  <Controller
                    name={`items.${index}.skillDescription.${indexDesc}.order`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        type="number"
                        label="Order"
                        className="w-full"
                        {...field}
                      />
                    )}
                  />
                  <IconButton
                    aria-label="edit"
                    color="inherit"
                    onClick={() => removeRowSkillDescription(index, indexDesc)}
                  >
                    <FaRegTrashAlt />
                  </IconButton>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => addRowSkillDescription(index)}
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
          onClick={addSkill}
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

export default DialogEditSkill;
