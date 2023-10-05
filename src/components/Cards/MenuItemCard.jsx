import PropTypes from "prop-types";
import SectionHeading from "../Section_heading/SectionHeading";
import SectionFooterButton from "../Button/SectionFooterButton";
import Loading from "../shared/Loading";

const MenuItemCard = ({
  menuItems,
  sectionHeading,
  loading,
  subTitle,
  buttonText,
}) => {
  let content;

  if (loading) content = <Loading />;
  if (menuItems.length > 0) {
    content = menuItems.map((item) => (
      <div
        className="flex flex-col items-center md:items-start md:space-x-4 md:flex-row"
        key={item._id}
      >
        <img
          src={item.image}
          alt=""
          className="w-[118px] h-[104px]"
          style={{ borderRadius: "0px 200px 200px 200px" }}
        />
        <div className="text-center md:text-start">
          <h4 className="text-xl ">
            {item.name}{" "}
            <span className="hidden lg:inline">------------------</span>
          </h4>
          <p className="text-gray_medium">{item.recipe}</p>
        </div>
        <p className="text-yellow">${item.price}</p>
      </div>
    ));
  }
  return (
    <section className="flex flex-col items-center gap-12 p-5 lg:px-20 lg:py-20">
      {sectionHeading ? (
        <SectionHeading subTitle={subTitle} heading={sectionHeading} />
      ) : null}
      <div className="grid gap-10 md:grid-cols-2">{content}</div>
      <SectionFooterButton>{buttonText}</SectionFooterButton>
    </section>
  );
};

MenuItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  sectionHeading: PropTypes.string,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  menuItems: Array,
  loading: PropTypes.node,
};
export default MenuItemCard;
