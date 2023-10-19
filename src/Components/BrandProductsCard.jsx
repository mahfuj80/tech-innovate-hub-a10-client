import PropTypes from 'prop-types';

const BrandProductsCard = ({ product }) => {
  return <div>Product: {product.name}</div>;
};
BrandProductsCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default BrandProductsCard;
