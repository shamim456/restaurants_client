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
    description: "Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00",
    icon: watch,
  },
];

const OurLocation = () => {
  //   let content = locationIcon.map((info) => {
  //     return <div key={info._id}>

  //     </div>;
  //   });

  return (
    <section>
      <SectionHeading subtitle="---Visit Us---" heading="OUR LOCATION" />
    </section>
  );
};

export default OurLocation;
