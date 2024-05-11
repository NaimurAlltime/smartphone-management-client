import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { TbPackages } from "react-icons/tb";
import SidebarLinkGroup from "./SidebarLinkGroup";
import logo from "../../assets/logo/logo.png";
import "../../styles/dashboard.css";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoListCircleOutline } from "react-icons/io5";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72 pt-2 lg:pt-2 flex-col overflow-y-hidden custom-sidebar-bg duration-300 ease-linear dark:bg-slate-950 lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink className="flex gap-0 items-center" to="/dashboard">
          <img className="w-[72px]" src={logo} alt="Logo" />
          <h2 className="text-white text-xl font-semibold text-center">
            E-Smartphone
          </h2>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 ps-4 lg:mt-3 lg:ps-3">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-300">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item smartphone --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/smartphone" || pathname.includes("smartphone")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-1 rounded-sm py-2 px-4 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-900 dark:hover:bg-gray-900 ${
                          (pathname === "/smartphone" ||
                            pathname.includes("smartphone")) &&
                          "bg-gray-900 dark:bg-gray-500"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <BiCategory className="text-xl" />
                        Smartphone Management
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-1 mb-2 flex flex-col gap-1 pl-6">
                          <li>
                            <NavLink
                              to="/all-smartphone"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-1 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              <IoListCircleOutline className="text-xl" />
                              All Smartphone
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/add-smartphone"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-1 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              <IoMdAddCircleOutline className="text-xl" />
                              Add Smartphone
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu item smartphone --> */}
              {/* <!-- Menu Item sales management --> */}{" "}
              <li>
                <NavLink
                  to="/sales-management"
                  className={`group relative flex items-center gap-1 rounded-sm py-2 px-4 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-900 dark:hover:bg-gray-900 ${
                    pathname.includes("sales-management") &&
                    "bg-gray-900 dark:bg-gray-500"
                  }`}
                >
                  <MdOutlineManageSearch className="text-xl" />
                  Sales Management
                </NavLink>
              </li>
              {/* <!-- Menu Item sales management  --> */}
              {/* <!-- Menu Item history management --> */}{" "}
              <li>
                <NavLink
                  to="/history-management"
                  className={`group relative flex items-center gap-1 rounded-sm py-2 px-4 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-900 dark:hover:bg-gray-900 ${
                    pathname.includes("history-management") &&
                    "bg-gray-900 dark:bg-gray-500"
                  }`}
                >
                  <MdOutlineManageHistory className="text-xl" />
                  History Management
                </NavLink>
              </li>
              {/* <!-- Menu Item history management  --> */}
              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/my-profile"
                  className={`group relative flex items-center gap-1 rounded-sm py-2 px-4 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-900 dark:hover:bg-gray-900 ${
                    pathname.includes("profile") &&
                    "bg-gray-900 dark:bg-gray-500"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  My Profile
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-300">
              OTHERS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <button
                  onClick={handleLogout}
                  className={`group relative flex items-center gap-1 rounded-sm py-2 px-4 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-900 dark:hover:bg-gray-900 ${
                    pathname.includes("chart") && "bg-gray-900 dark:bg-gray-500"
                  }`}
                >
                  {/* <TbPackages className="text-lg" /> */}
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                      fill=""
                    />
                    <path
                      d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                      fill=""
                    />
                  </svg>
                  Log Out
                </button>
              </li>
              {/* <!-- Menu Item Chart --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
