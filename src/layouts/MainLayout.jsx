import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" ? true : false;
  const isSignupPage = location.pathname === "/signup" ? true : false;

  return (
    <div className="overflow-hidden ">
      {isLoginPage || isSignupPage || <Navbar />}
      <Outlet />
      {isLoginPage || isSignupPage || <Footer />}
    </div>
  );
};

export default MainLayout;
