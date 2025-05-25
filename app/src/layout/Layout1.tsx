import Content from "../components/Content";
import Sidebar from "../modules/Sidebar";
import '../styles/Layout1.css'

const Layout1 = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Content />
    </div>
  );
};
export default Layout1;
