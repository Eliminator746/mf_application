import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home";
import Layout1 from "./layout/Layout1";
import Setting from "./pages/Setting";
import Filter from "./pages/Filter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1 />}>
            <Route index element={<Home />} />
            <Route path="filter" element={<Filter />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
