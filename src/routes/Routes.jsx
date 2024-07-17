import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Registration from "../pages/authentication/Registration";
import Login from "../pages/authentication/Login";
import SendMoney from "../pages/home/pages/SendMoney";
import Allusers from "../layout/dashboard/admin pages/Allusers";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/sendmoney',
          element: <SendMoney></SendMoney>
        },
        {
          path: '/allusers',
          element: <Allusers></Allusers>
        }
      ]
    },
    {
      path: "/registration",
      element: <Registration></Registration>
    },
    {
      path: "/login",
      element: <Login></Login>
    }
  ]);