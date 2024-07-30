import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home/Home";
import BackOfficeLayout from "../layouts/BackOfficeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/back-office",
    element: <BackOfficeLayout />,
    children: [
      {
        index: true,
        element: <div>BackOffice</div>,
      },
    ],
  },
]);

export default router;
