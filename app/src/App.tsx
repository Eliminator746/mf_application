import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout1 from "./layout/Layout1";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1 />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
