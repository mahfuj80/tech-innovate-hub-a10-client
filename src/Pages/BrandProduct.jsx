import { useParams } from 'react-router-dom';

const BrandProduct = () => {
  const { name } = useParams();
  if (name === 'Intel') {
    console.log(name);
  }
  return (
    <div>
      <h2>Specific Brand Product</h2>
    </div>
  );
};

export default BrandProduct;
