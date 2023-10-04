import Hero from "../components/features/Home/Hero";
import OrderOnline from "../components/features/Home/OrderOnline";
import PopularMenu from "../components/features/Home/PopularMenu";
import QuoteSection from "../components/features/Home/QuoteSection";

const Home = () => {
  return (
    <>
      <Hero />
      <OrderOnline />
      <QuoteSection />
      <PopularMenu />
    </>
  );
};

export default Home;
