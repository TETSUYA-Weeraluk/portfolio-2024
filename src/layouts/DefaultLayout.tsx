import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => (
  <div className="flex flex-col gap-4 ">
    <main className="w-full h-full">
      <Outlet />
    </main>
  </div>
);

export default DefaultLayout;
