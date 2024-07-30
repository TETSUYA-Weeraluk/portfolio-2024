import { Outlet } from "react-router-dom";

const BackOfficeLayout = () => {
  return (
    <div className="flex-col-gap4">
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default BackOfficeLayout;
