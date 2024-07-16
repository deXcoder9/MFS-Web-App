import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Registration from "../pages/authentication/Registration";
import Login from "../pages/authentication/Login";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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