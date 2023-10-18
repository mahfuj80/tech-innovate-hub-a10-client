import { useEffect, useState } from 'react';

const OurBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/brands')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  console.log(brands);
  return (
    <div>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-100">
        <div className="container mx-auto">
          <p className="text-4xl text-center font-bold mb-16">
            Add Your Product
          </p>
          <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand?._id}>
                <div className="card bg-base-100 shadow-xl">
                  <figure className="px-2 pt-2">
                    <img
                      src={brand.image}
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBrands;
