import "./SideBar.scss";
import React from "react";

import { dashboardRoutes, customerRoutes } from "../../../utils/routes";

import Briefcase from "../../../assets/svgs/sidebar/Briefcase.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import SideBarItem from "../SideBarItem/SideBarItem";

const SideBar = () => {
  return (
    <div className="sidebar-box">
      <div className="sidebar-logo">
        <h2>Untitled UI</h2>
      </div>
      <div className="sidebar-dash">
        {/* <SideBarItem
          path={dashboardRoutes.path}
          name={dashboardRoutes.name}
          icon={dashboardRoutes.icon}
        /> */}
        {dashboardRoutes.map((route) => (
          <SideBarItem path={route.path} name={route.name} Icon={route.icon} />
        ))}
      </div>
      <div className="sidebar-list">
        {customerRoutes.map((route, index) => (
          <SideBarItem
            key={index}
            path={route.path}
            name={route.name}
            Icon={route.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
