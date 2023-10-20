import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/brands')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div>
      <section className="pt-20 px-8 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-100">
        <div className="container mx-auto">
          <p className="text-4xl text-center font-bold mb-16">Our Brands</p>
          <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Link key={brand?._id} to={`/brand/${brand.name}`}>
                <div>
                  <div className="card bg-base-100 shadow-sm hover:shadow-2xl cursor-pointer">
                    <figure className="px-2 pt-2">
                      <img
                        src={brand.image}
                        alt="Shoes"
                        className="rounded-xl w-full"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="text-3xl font-bold text-black">
                        {brand?.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBrands;
