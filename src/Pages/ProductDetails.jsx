import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
  const product = useLoaderData();
  const handleAddToCart = () => {
    const cartProduct = {
      name: product?.name,
      description: product?.description,
      image: product?.image,
      brandName: product?.brandName,
      type: product?.type,
      price: product?.price,
      rating: product?.rating,
    };
    fetch('https://tech-innovate-hub-a10-server-puml71law.vercel.app/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Successfully Added',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Something Went Wrong!!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  };

  return (
    <div className="px-5 py-7 bg-gray-100 rounded-lg">
      <h2 className="text-center py-16 text-4xl font-bold">Product Details</h2>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className=" w-full md:w-1/2 flex items-center justify-center">
          <img
            className="rounded-lg px-2 py-2"
            src={product?.image}
            alt="Product_Image"
          />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col items-center justify-center gap-3">
          <p className="text-center text-3xl mb-5 font-bold">{product?.name}</p>
          <p className="text-center font-bold">{product?.description}</p>
          <p className="mr-3 text-3xl">
            <span className="font-bold">Brand: </span>
            {product?.brandName}
          </p>
          <p className="mr-3 text-3xl">
            <span className="font-bold">Type: </span>
            {product?.type}
          </p>
          <p className="mr-3 text-3xl">
            <span className="font-bold">Price: $</span>
            {product?.price}
          </p>
          <p className=" text-3xl">
            <span className="font-bold">Rating: </span>
            {product?.rating}
          </p>
          <button
            onClick={handleAddToCart}
            className="btn bg-gray-200 hover:bg-gray-300 font-bold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
