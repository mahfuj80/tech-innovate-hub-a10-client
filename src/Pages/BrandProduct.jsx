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
    fetch('https://tech-innovate-hub-a10-server-puml71law.vercel.app/banners')
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
    fetch(
      `https://tech-innovate-hub-a10-server-puml71law.vercel.app/products/${name}`
    )
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
        <div>
          <BrandProductSlider banners={banners}></BrandProductSlider>
          <div className=" bg-gray-100 py-20 px-10">
            <h1 className="my-16 text-4xl font-bold text-black text-center">
              {name} Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
              {products.map((product) => (
                <BrandProductsCard
                  key={product._id}
                  product={product}
                ></BrandProductsCard>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NoProductFound></NoProductFound>
      )}
    </>
  );
};

export default BrandProduct;
