import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <OurMenu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
