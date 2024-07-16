import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-white h-[600px] w-[400px] mx-auto rounded-md">
      <div>
      <Navbar></Navbar>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
