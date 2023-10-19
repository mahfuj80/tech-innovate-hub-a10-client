import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandProductsCard = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm hover:shadow-2xl">
        <figure className="px-2 pt-2">
          <img
            src={product?.image}
            alt="Shoes"
            className="rounded-xl w-full h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title w-fit mx-auto">{product?.name}</h2>

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

          <div className="card-actions">
            <div className="flex justify-around w-full ">
              <Link to={`/details/${product?._id}`}>
                <button className="btn bg-gray-200 hover:bg-gray-300">
                  Details
                </button>
              </Link>
              <Link to={`/update-product/${product?._id}`}>
                <button className="btn bg-gray-200 hover:bg-gray-300">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BrandProductsCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default BrandProductsCard;
