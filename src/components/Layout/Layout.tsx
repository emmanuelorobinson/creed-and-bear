import "./Layout.scss";

import React from "react";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="sidebar">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
