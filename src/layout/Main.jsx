import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-white rounded-3xl min-h-[600px] min-w-[400px]  ">
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
