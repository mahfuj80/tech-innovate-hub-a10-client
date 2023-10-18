import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import FeaturedProducts from '../Components/FeaturedProducts';
import OurBrands from '../Components/OurBrands';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurBrands></OurBrands>
      <FeaturedProducts></FeaturedProducts>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
