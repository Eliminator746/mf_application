import { Link } from "react-router-dom";

interface LargeSidebarItemProps {
  Icon: React.ElementType;
  title: string;
  url: string;
}

const LargeSidebarItem = ({ Icon, title, url }: LargeSidebarItemProps) => {
  return (
    <Link to={url} className={`large-sidebar-item `}>
      <Icon className="large-sidebar-icon" />
      <div className="ellipsis-text">{title}</div>
    </Link>
  );
};

export default LargeSidebarItem;
