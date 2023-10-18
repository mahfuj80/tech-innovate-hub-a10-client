import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import FeaturedProducts from '../Components/FeaturedProducts';
import OurProducts from '../Components/OurProducts';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurProducts></OurProducts>
      <FeaturedProducts></FeaturedProducts>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
