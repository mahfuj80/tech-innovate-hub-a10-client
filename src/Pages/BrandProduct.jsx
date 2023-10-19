import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BrandProductSlider from '../Components/BrandProductSlider';

const BrandProduct = () => {
  const { name } = useParams();
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/banners')
      .then((res) => res.json())
      .then((fetchedBanners) => {
        // Filter banners based on the provided name
        const filteredBanners = fetchedBanners.filter(
          (banner) => banner.name.toLowerCase() === name.toLowerCase()
        );
        setBanners(filteredBanners);
      });
  }, [name]);

  return (
    <>
      <BrandProductSlider banners={banners}></BrandProductSlider>
    </>
  );
};

export default BrandProduct;
