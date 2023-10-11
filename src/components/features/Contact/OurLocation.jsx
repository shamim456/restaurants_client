import SectionHeading from "../../Section_heading/SectionHeading";
import watch from "../../../assets/icon/watch.png";
import telephoneIcon from "../../../assets/icon/telephone.png";
import locationIcon from "../../../assets/icon/location.png";

const LocationInfo = [
  {
    _id: 1,
    title: "PHONE",
    description: "+880 1111111111",
    icon: telephoneIcon,
  },
  {
    _id: 2,
    title: "ADDRESS",
    description: "+38 (012) 34 56 789",
    icon: locationIcon,
  },
  {
    _id: 3,
    title: "WORKING HOURS",
    description: {
      x: "Mon - Fri: 08:00 - 22:00",
      y: " Sat - Sun: 10:00 - 23:00",
    },
    icon: watch,
  },
];

const OurLocation = () => {
  let content = LocationInfo.map((info, index) => {
    return (
      <div key={info._id}>
        <div className="flex items-center justify-center h-20 bg-yellow">
          <img src={info.icon} alt="" className="w-8 h-8 " />
        </div>
        <div className="px-5 h-[250px] ">
          <div className="flex flex-col items-center justify-center h-full gap-2 bg-gray_background">
            <p className="text-2xl font-bold ">{info.title}</p>
            {index === 2 ? (
              <div>
                <p className="font-semibold text-gray_medium">
                  {info.description.x}
                </p>
                <p className="font-semibold text-gray_medium">
                  {info.description.y}
                </p>
              </div>
            ) : (
              <p className="font-semibold text-gray_medium">
                {info.description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="px-5 md:px-10 lg:px-20 ">
      <SectionHeading subtitle="---Visit Us---" heading="OUR LOCATION" />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 ">{content}</div>
    </section>
  );
};

export default OurLocation;
