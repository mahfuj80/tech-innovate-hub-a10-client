import PropTypes from 'prop-types';

const BrandProductsCard = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img
            src={product?.image}
            alt="Shoes"
            className="rounded-xl w-full h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product?.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <div className="flex gap-3">
              <button className="btn bg-gray-200 hover:bg-gray-300">
                Details
              </button>
              <button className="btn bg-gray-200 hover:bg-gray-300">
                Update
              </button>
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
