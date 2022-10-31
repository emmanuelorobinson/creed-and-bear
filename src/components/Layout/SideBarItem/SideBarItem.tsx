import "./SideBarItem.scss";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  name: string;
  Icon: string | React.FC;
  active?: boolean;
}

const SideBarItem = ({ path, name, Icon }: Props) => {
  return (
      <Link to={path} className="sidebar-item">
        {/* <img src={icon} alt="" /> */}
        {/* {check if of tyupe string or React.FC} */}
        {typeof Icon === "string" ? (
          <img src={Icon} alt="" />
        ) : (
          <Icon/>
        )}
        <p>{name}</p>
      </Link>
  );
};

export default SideBarItem;
