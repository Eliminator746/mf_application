import type { ElementType } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

interface SmallSidebarItemInput {
  Icon: ElementType;
  url: string;
}
const SmallSidebarItem = ({ Icon, url }: SmallSidebarItemInput) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) => `icon-box ${isActive ? "active" : ""}`}
    >
      <Icon className="w-[22px] h-[22px] icon" />
    </NavLink>
  );
};
export default SmallSidebarItem;
