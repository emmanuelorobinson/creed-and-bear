import Home from "../assets/svgs/sidebar/Home.svg";
import Users from "../assets/svgs/sidebar/Users.svg";
import UsersGuarantors from "../assets/svgs/sidebar/UsersGuarantors.svg";

import {RiHome6Line, RiCheckboxMultipleLine} from "react-icons/ri";
import {MdAddChart} from "react-icons/md";
import {ImStack} from "react-icons/im";
import {BiPieChartAlt2, BiUserCircle} from "react-icons/bi";
import {VscBellDot} from "react-icons/vsc";
import {IoChatbubblesOutline} from "react-icons/io5";
import {BsToggles2} from "react-icons/bs";

const color = "#213F7D";

export const dashboardRoutes = [
  {
    path: "/users",
    name: "Home",
    icon: RiHome6Line,
  },
  {
    path: "/users",
    name: "Dashboard",
    icon: MdAddChart,
  },
  {
    path: "/users",
    name: "Projects",
    icon: ImStack,
  },
  {
    path: "/users",
    name: "Tasks",
    icon: RiCheckboxMultipleLine,
  },
  {
    path: "/users",
    name: "Reporting",
    icon: BiPieChartAlt2,
  },
  {
    path: "/users",
    name: "Users",
    icon: BiUserCircle,
  },
];

export const customerRoutes = [
  {
    path: "/users",
    name: "Notifications",
    icon: VscBellDot,
  },
  {
    path: "/users",
    name: "Support",
    icon: IoChatbubblesOutline,
  },
  {
    path: "/users",
    name: "Settings",
    icon: BsToggles2,
  },
];
