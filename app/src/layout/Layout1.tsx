import Content from "../components/Content";
import LargeSidebar from "../modules/LargeSidebarContent";
import Sidebar from "../modules/Sidebar";
import '../styles/Layout1.css'

const Layout1 = () => {
  return (
    <div className='container'>
      <Sidebar />
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', backgroundColor:'#dbdbdb40' }}>
      <LargeSidebar />
      <Content />
      </div>
    </div>
  );
};
export default Layout1;
