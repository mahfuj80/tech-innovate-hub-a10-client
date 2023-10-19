import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
  const products = useLoaderData();
  const handleDelete = () => {
    console.log('handle delete button created');
  };

  return (
    <div className="py-10 bg-gray-100 rounded-lg">
      <h2 className="text-4xl text-center my-16 font-bold">
        Product You Added To Cart
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
        {products.map((product) => (
          <>
            <div>
              <div className="card flex-col card-side md:flex-row bg-base-100 hover:shadow-2xl shadow-lg md:px-6">
                <figure>
                  <img
                    className="w-[200px] pt-8 md:pt-0 md:w-full"
                    src={product?.image}
                    alt="Product Image"
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title justify-center">{product?.name}</h2>
                  <div className="flex flex-col  gap-2 justify-center">
                    <p className="mr-3">
                      <span className="font-bold">Brand: </span>
                      {product?.brandName}
                    </p>
                    <p className="mr-3">
                      <span className="font-bold">Type: </span>
                      {product?.type}
                    </p>
                    <p className="mr-3">
                      <span className="font-bold">Price: $</span>
                      {product?.price}
                    </p>
                    <p>
                      <span className="font-bold">Rating: </span>
                      {product?.rating}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button onClick={handleDelete} className="btn btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
