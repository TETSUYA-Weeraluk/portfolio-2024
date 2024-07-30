import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Button, Divider } from "@mui/joy";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { Language } from "@mui/icons-material";

const ProjectBO = () => {
  const listProject = useSelector(
    (state: RootState) => state.home.portfolio.project
  );

  return (
    <>
      <h1 className="text-title text-center underline-offset-8 underline">
        Project
      </h1>
      <div className="wrapper-header p-0 flex-wrap justify-center">
        {listProject &&
          listProject.map((project, index) => (
            <div
              key={project.title + index}
              className="border rounded-md p-4 w-[300px] h-[500px] flex flex-col items-center space-y-2"
            >
              <div className="flex flex-col flex-grow gap-2">
                {project.image ? (
                  <div className="mx-auto w-full">
                    <img src={project.image} alt={project.title} />
                  </div>
                ) : (
                  <div className="h-[250px] w-[250px] flex flex-col justify-center items-center bg-gray-900">
                    Image not found
                  </div>
                )}
                <span className="text-base-web">Name : {project.title}</span>
                <span className="text-base-web line-clamp-3">
                  Description : {project.description}
                </span>
                <Divider />
              </div>
              <div className="flex space-x-2 mt-2">
                <Button
                  component="a"
                  href={project.link_github}
                  startDecorator={<OpenInNew />}
                >
                  Source Code
                </Button>
                <Button
                  component="a"
                  href={project.link_demo}
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

export default ProjectBO;
