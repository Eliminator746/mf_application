import { Filter, Home, Settings } from "lucide-react"
import SmallSidebarItem from "../components/SmallSidebarItem"
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div>
       <aside
          className={`my-box `}
        >
          <SmallSidebarItem Icon={Home} url="/" />
          <SmallSidebarItem Icon={Filter} url="/filter" />          
          <SmallSidebarItem Icon={Settings} url="/setting" />
        </aside>
    </div>
  )
}
export default Sidebar