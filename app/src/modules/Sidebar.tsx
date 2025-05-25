import { Home, PersonStanding } from "lucide-react"
import SmallSidebarItem from "../components/SmallSidebarItem"
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div>
       <aside
          className={`my-box `}
        >
          <SmallSidebarItem Icon={Home} url="/" />
          <SmallSidebarItem Icon={PersonStanding} url="/about" />
          <SmallSidebarItem Icon={Home} url="/" />          
        </aside>
    </div>
  )
}
export default Sidebar