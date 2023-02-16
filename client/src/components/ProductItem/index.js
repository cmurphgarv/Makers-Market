import { Link } from "react-router-dom";

const ProductItem = ({ name, image, price, _id }) => {
  return (
    <div class="">
      <div class="productItem">
        <Link to={`/products/${_id}`}>
          <img src={`/images/${image}`} alt={name} />
          <h5>{name}</h5>${price}
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
