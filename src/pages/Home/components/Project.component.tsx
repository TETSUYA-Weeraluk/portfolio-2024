import ImageProjectComponent from "./ImageProject.component";

const ProjectComponent = () => {
  return (
    <>
      <h1 className="text-title text-center">Project</h1>
      <div className="wrapper-header p-0 flex-wrap justify-center">
        <div className="bg-secondary rounded-lg p-4 space-y-4">
          <ImageProjectComponent skill={false}>
            <span className="text-tertiary">300*300</span>
          </ImageProjectComponent>
          <p className="flex items-center gap-1">
            <span>Description :</span>
            <span>Test</span>
          </p>
          <div className="flex justify-between">
            <button className="custom-button">Source code</button>
            <button className="custom-button">Demo</button>
          </div>
        </div>
        <div className="bg-secondary rounded-lg p-4 space-y-4">
          <ImageProjectComponent skill={false}>
            <span className="text-tertiary">300*300</span>
          </ImageProjectComponent>
          <p className="flex items-center gap-1">
            <span>Description :</span>
            <span>Test</span>
          </p>
          <div className="flex justify-between">
            <button className="custom-button">Source code</button>
            <button className="custom-button">Demo</button>
          </div>
        </div>
        <div className="bg-secondary rounded-lg p-4 space-y-4">
          <ImageProjectComponent skill={false}>
            <span className="text-tertiary">300*300</span>
          </ImageProjectComponent>
          <p className="flex items-center gap-1">
            <span>Description :</span>
            <span>Test</span>
          </p>
          <div className="flex justify-between">
            <button className="custom-button">Source code</button>
            <button className="custom-button">Demo</button>
          </div>
        </div>
        <div className="bg-secondary rounded-lg p-4 space-y-4">
          <ImageProjectComponent skill={false}>
            <span className="text-tertiary">300*300</span>
          </ImageProjectComponent>
          <p className="flex items-center gap-1">
            <span>Description :</span>
            <span>Test</span>
          </p>
          <div className="flex justify-between">
            <button className="custom-button">Source code</button>
            <button className="custom-button">Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;
