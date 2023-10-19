import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BrandProductSlider from '../Components/BrandProductSlider';
import BrandProductsCard from '../Components/BrandProductsCard';

const BrandProduct = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetch(`http://localhost:5000/products/${name}`)
      .then((res) => res.json())
      .then((fetchedProducts) => {
        // Filter Products based on the provided name
        const filteredProducts = fetchedProducts.filter(
          (product) => product?.brandName.toLowerCase() === name.toLowerCase()
        );
        setProducts(filteredProducts);
      });
  }, [name]);

  return (
    <>
      <BrandProductSlider banners={banners}></BrandProductSlider>
      {products.map((product) => (
        <BrandProductsCard
          key={product._id}
          product={product}
        ></BrandProductsCard>
      ))}
    </>
  );
};

export default BrandProduct;
