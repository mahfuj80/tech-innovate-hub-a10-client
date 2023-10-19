import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BrandProductSlider from '../Components/BrandProductSlider';
import BrandProductsCard from '../Components/BrandProductsCard';
import NoProductFound from '../Components/NoProductFound';

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
      {products.length > 0 ? (
        <>
          <BrandProductSlider banners={banners}></BrandProductSlider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 px-20 bg-gray-100 gap-10">
            {products.map((product) => (
              <BrandProductsCard
                key={product._id}
                product={product}
              ></BrandProductsCard>
            ))}
          </div>
        </>
      ) : (
        <NoProductFound></NoProductFound>
      )}
    </>
  );
};

export default BrandProduct;
