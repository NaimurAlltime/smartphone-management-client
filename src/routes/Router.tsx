import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GetAllSmartphone from "../pages/SmartphoneManagement/GetAllSmartphone";
import UpdateSmartphone from "../pages/SmartphoneManagement/UpdateSmartphone";
import SalesManagement from "../pages/SalesManagement/SalesManagement";
import SalesHistory from "../pages/SalesHistory/SalesHistory";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateSmartphone from "@/pages/SmartphoneManagement/CreateSmartphone";
import DuplicateSmartphone from "@/pages/SmartphoneManagement/DuplicateSmartphone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "add-smartphone",
        element: <CreateSmartphone />,
      },
      {
        path: "all-smartphone",
        element: <GetAllSmartphone />,
      },
      {
        path: "update-smartphone/:id",
        element: <UpdateSmartphone />,
      },
      {
        path: "duplicate-smartphone/:id",
        element: <DuplicateSmartphone />,
      },

      {
        path: "sales-management",
        element: <SalesManagement />,
      },
      {
        path: "history-management",
        element: <SalesHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
