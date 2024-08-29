import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Home/Footer";

const Main = () => {
  return (
    <div className="max-w-[1350px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
