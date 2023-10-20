import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
  const loadingProducts = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(loadingProducts);
  }, [loadingProducts]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Successfully Deleted',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          const productsAfterDeleted = products.filter(
            (product) => product?._id !== id
          );
          setProducts(productsAfterDeleted);
        }
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!!',
          text: 'Product Can not be Delete',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  };

  return (
    <>
      {products?.length > 0 ? (
        <div className="py-10 bg-gray-100 rounded-lg">
          <h2 className="text-4xl text-center my-16 font-bold">
            Product You Added To Cart
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
            {products?.map((product) => (
              <div key={product?._id}>
                <div className="card flex-col card-side md:flex-row bg-base-100 hover:shadow-2xl shadow-lg md:px-6">
                  <figure>
                    <img
                      className="w-[200px] pt-8 md:pt-0 md:w-full"
                      src={product?.image}
                      alt="Product Image"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title justify-center">
                      {product?.name}
                    </h2>
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
                      <button
                        onClick={() => handleDelete(product?._id)}
                        className="btn btn-primary"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-[90vh]">
          <h1 className="text-5xl font-bold">
            You Did not Add Any Product to Card
          </h1>
        </div>
      )}
    </>
  );
};

export default MyCart;
