import Dashboard from "../pages/Dashboard/Dashboard";
import SalesHistory from "../pages/SalesHistory/SalesHistory";
import SalesManagement from "../pages/SalesManagement/SalesManagement";
import CreateSmartphone from "../pages/SmartphoneManagement/CreateSmartphone";
import GetAllSmartphone from "../pages/SmartphoneManagement/GetAllSmartphone";
import UpdateSmartphone from "../pages/SmartphoneManagement/UpdateSmartphone";

export const smartphonePaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Smartphone Management",
    children: [
      {
        name: "Create Smartphone",
        path: "create-smartphone",
        element: <CreateSmartphone />,
      },
      {
        name: "Get All Smartphone",
        path: "get-all-smartphone",
        element: <GetAllSmartphone />,
      },
      {
        name: "Update Smartphone",
        path: "update-smartphone",
        element: <UpdateSmartphone />,
      },
    ],
  },
  {
    name: "Sales Management",
    path: "sales-management",
    element: <SalesManagement />,
  },
  {
    name: "Sales History",
    path: "sales-history",
    element: <SalesHistory />,
  },
];
