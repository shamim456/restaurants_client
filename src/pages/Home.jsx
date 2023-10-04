import CallUs from "../components/features/Home/CallUs";
import ChefRecommends from "../components/features/Home/ChefRecommends";
import FromOurMenu from "../components/features/Home/FromOurMenu";
import Hero from "../components/features/Home/Hero";
import OrderOnline from "../components/features/Home/OrderOnline";
import PopularMenu from "../components/features/Home/PopularMenu";
import QuoteSection from "../components/features/Home/QuoteSection";
import Testimonials from "../components/features/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <OrderOnline />
      <QuoteSection />
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      <FromOurMenu />
      <Testimonials />
    </>
  );
};

export default Home;
