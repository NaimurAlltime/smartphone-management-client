import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "create-admin",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        key: "create-faculty",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
      {
        key: "create-student",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
    ],
  },
];
