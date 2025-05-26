import { Filter, Home, User } from "lucide-react";
import LargeSidebarItem from "../components/LargeSidebarItem";
import "../styles/LargeSidebar.css";
import { ReactNode } from "react";

const LargeSidebarContent = () => {
  return (
    <div>
      <aside className={`large-sidebar`}>
        <LargeSidebarSection title="General">
          <LargeSidebarItem Icon={Home} title="Home" url="/" />
          <LargeSidebarItem Icon={Filter} title="Filter" url="/filter" />
        </LargeSidebarSection>

        <LargeSidebarSection title="Nothing">
          <LargeSidebarItem Icon={Home} title="Home" url="/home" />
          <LargeSidebarItem Icon={User} title="User" url="/users" />
        </LargeSidebarSection>

      </aside>
    </div>
  );
};

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
};

function LargeSidebarSection({ children, title }: LargeSidebarSectionProps) {
  return (
    <div style={{borderBottom:'1px solid gray'}}>
      {title && (
        <div
          style={{
            alignSelf: "self-start",
            fontWeight: "400",
            fontSize: "1.125rem",
            marginLeft:'0.125rem',
            marginTop: "0.5rem",
            marginBottom: "0.25rem",
          }}
        >
          {title}
        </div>
      )}
      {children}

    </div>
  );
}

export default LargeSidebarContent;
