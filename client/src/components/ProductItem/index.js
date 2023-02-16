import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const ProductItem = ({ name, image, price, _id }) => {
  return (
    <div className="">
      <div className="productItem">
        <Link to={`/products/${_id}`}>
          <img src={`/images/${image}`} alt={name} />
          <h5>{name}</h5>
          <p>${price}</p>
        </Link>
        {Auth.loggedIn() && <button>Add to Cart</button>}
      </div>
    </div>
  );
};
export default ProductItem;
