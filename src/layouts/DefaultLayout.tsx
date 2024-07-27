import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => (
  <div className="flex-col-gap4">
    <main className="w-full h-full">
      <Outlet />
    </main>
  </div>
);

export default DefaultLayout;
