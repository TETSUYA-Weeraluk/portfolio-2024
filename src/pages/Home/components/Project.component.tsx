import Button from "@mui/joy/Button";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { Language } from "@mui/icons-material";
import { Divider } from "@mui/joy";

const ProjectComponent = () => {
  const listProject = [
    {
      image: null,
      name: "Project....",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      linkSoruce: "https://github.com",
      linkDemo: "https://github.com",
    },
    {
      image: null,
      name: "Project....",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      linkSoruce: "https://github.com",
      linkDemo: "https://github.com",
    },
    {
      image: null,
      name: "Project....",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      linkSoruce: "https://github.com",
      linkDemo: "https://github.com",
    },
    {
      image: null,
      name: "Project....",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      linkSoruce: "https://github.com",
      linkDemo: "https://github.com",
    },
  ];
  return (
    <>
      <h1 className="text-title text-center">Project</h1>
      <div className="wrapper-header p-0 flex-wrap justify-center">
        {listProject &&
          listProject.map((project) => (
            <div className="border rounded-md p-4 w-[300px] h-[500px] flex flex-col items-center space-y-2">
              {project.image ? (
                <div className="mx-auto w-full">
                  <img src={project.image} alt={project.name} />
                </div>
              ) : (
                <div className="h-[250px] w-[250px] flex flex-col justify-center items-center bg-gray-900">
                  Image not found
                </div>
              )}
              <span className="text-base-web">Name : {project.name}</span>
              <span className="text-base-web line-clamp-3">
                Description : {project.description}
              </span>
              <Divider />
              <div className="flex space-x-2 mt-2">
                <Button
                  component="a"
                  href={project.linkSoruce}
                  startDecorator={<OpenInNew />}
                >
                  Source Code
                </Button>
                <Button
                  component="a"
                  href={project.linkDemo}
                  startDecorator={<Language />}
                >
                  Demo
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProjectComponent;
