import backgroundImage from "../assets/others/wood-grain-pattern-gray1x.png";
import bannerImage from "../assets/others/authentication1.png";
import InputField from "../components/InputField/InputField";
import AuthButton from "../components/Button/AuthButton";
import { Link } from "react-router-dom";
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
        <div className="flex-1">
          <img src={bannerImage} alt="" className="w-full" />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <p className="text-4xl font-bold">Login</p>
            <InputField
              type="email"
              placeHolder="Enter your email"
              label="Email"
              className="w-full px-12"
            />
            <InputField
              type="password"
              placeHolder="Enter your password"
              label="Password"
              className="w-full px-12"
            />
            <div className="w-full ">
              {/* <InputField
                type="text"
                label="Captcha"
                className="w-full px-12"
              /> */}
              <button className="mt-3 ml-12 text-lg font-semibold text-blue_sky">
                Reload Captcha
              </button>
              <InputField
                type="text"
                placeHolder="Type here..."
                className="w-full px-12"
              />
            </div>
            <div className="w-full px-12">
              <AuthButton>Sign In</AuthButton>
            </div>
          </div>
          <div className="flex flex-col items-center px-12">
            <p>
              New here? <Link>Create a New Account</Link>
            </p>
            <p>Or sign in with</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
