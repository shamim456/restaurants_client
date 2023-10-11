import backgroundImage from "../assets/others/wood-grain-pattern-gray1x.png";
import bannerImage from "../assets/others/authentication1.png";
import InputField from "../components/InputField/InputField";
import AuthButton from "../components/Button/AuthButton";
import { Link } from "react-router-dom";
import gitHubIcon from "../assets/icon/github.png";
import facebookIcon from "../assets/icon/facebook.png";
import googleIcon from "../assets/icon/google.png";

const Login = () => {
  const backgroundImageUrl = `url(${backgroundImage})`;
  const backgroundImageStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  return (
    <main
      className="flex items-center justify-center h-screen shadow-2xl"
      style={backgroundImageStyle}
    >
      <div
        className="w-10/12 flex items-center bg-yellow h-[90vh]"
        style={backgroundImageStyle}
      >
        <div className="flex-1 hidden lg:inline">
          <img src={bannerImage} alt="" className="w-full" />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col items-center justify-center w-full gap-4 px-5 lg:px-12">
            <p className="text-4xl font-bold">Login</p>
            <InputField
              type="email"
              placeHolder="Enter your email"
              label="Email"
              className="w-full "
            />
            <InputField
              type="password"
              placeHolder="Enter your password"
              label="Password"
              className="w-full "
            />
            <div className="w-full ">
              <button className="mt-3 text-lg font-semibold text-blue_sky">
                Reload Captcha
              </button>
              <InputField
                type="text"
                placeHolder="Type here..."
                className="w-full "
              />
            </div>
            <div className="w-full">
              <AuthButton>Sign In</AuthButton>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 px-5 mt-3 lg:px-12">
            <p className="lg:text-xl text-yellow">
              New here?{" "}
              <Link className="font-semibold " to="/signup">
                Create a New Account
              </Link>
            </p>
            <p className="text-xl font-medium">Or sign in with</p>
            <div className="flex items-center justify-center gap-5">
              <button className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-gray_medium hover:bg-gray_light">
                <img src={googleIcon} alt="" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-gray_medium hover:bg-gray_light">
                <img src={facebookIcon} alt="" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-gray_medium hover:bg-gray_light">
                <img src={gitHubIcon} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
