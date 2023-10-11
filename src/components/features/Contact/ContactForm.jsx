import InputField from "../../InputField/InputField";
import TextBox from "../../InputField/TextBox";
import SectionHeading from "../../Section_heading/SectionHeading";
import sendIcon from "../../../assets/icon/send.png";

const ContactForm = () => {
  return (
    <div>
      <SectionHeading
        subTitle="---Send Us a Message---"
        heading="CONTACT FORM"
      />
      <div className="flex items-center justify-center px-5 py-10 md:py-20 md:px-20 bg-gray_background">
        <div className="flex flex-col w-full gap-4 ">
          <div className="flex flex-col w-full gap-4 md:flex-row ">
            <InputField
              type="text"
              placeHolder="Enter your name"
              label="Name"
              className="flex-1"
            />
            <InputField
              type="email"
              placeHolder="Enter your email"
              label="Email"
              className="flex-1"
            />
          </div>
          <InputField
            type="text"
            placeHolder="Enter your phone number"
            label="Phone"
          />
          <TextBox label="Message" placeHolder="Write your message here" />
          <div className="flex justify-center ">
            <button className="flex items-center justify-center gap-1 px-3 py-2 font-bold text-white transition duration-300 ease-in-out rounded-lg hover:bg-yellow_light bg-yellow">
              <p>Send Message</p>
              <img src={sendIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
