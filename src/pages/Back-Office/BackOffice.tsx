import { Button } from "@mui/joy";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const BackOffice = () => {
  const defaultValues = {
    id: "",
    name: "Tee",
    nickname: "",
    position: "",
    welcomeText: "",
    image: "",
    content: "",
    imageAboutMe: "",
    personalInfo: [],
    education: [],
    experience: [],
    skill: [],
    project: [],
    user: {
      id: "",
      email: "",
    },
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full space-y-6">
      <h1 className="text-center text-4xl">MY PORTFOLIO</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Button type="submit" className="text-center w-full">
          Test
        </Button>

        <div className="grid grid-cols-3 gap-4">
          <div className="w-full">
            <h1 className="text-xl">Name</h1>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField className="w-full" {...field} placeholder="Name" />
              )}
            />
          </div>

          <div className="w-full">
            <h1 className="text-xl">Nickname</h1>
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

          <div className="w-full">
            <h1 className="text-xl">Position</h1>
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

        <div className="w-full">
          <h1 className="text-xl">Welcome Text</h1>
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <TextField className="w-full" {...field} placeholder="Hi" />
            )}
          />
        </div>

        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <div>
              <h1 className="text-xl">Image</h1>
              <TextField {...field} placeholder="image" />
            </div>
          )}
        />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <div>
              <h1 className="text-xl">Content</h1>
              <TextField {...field} placeholder="Content" />
            </div>
          )}
        />

        <Controller
          name="imageAboutMe"
          control={control}
          render={({ field }) => (
            <div>
              <h1 className="text-xl">Image about me</h1>
              <TextField {...field} placeholder="image" />
            </div>
          )}
        />
      </form>
    </div>
  );
};

export default BackOffice;
