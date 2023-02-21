import { useContext } from "react";
import ProductsContext from "../../utils/productsContext";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const ProductItem = ({ name, image, price, _id }) => {
  const { productList, setProductList } = useContext(ProductsContext);

  console.log(productList);

  const handleProductList = () => {
    setProductList([...productList, _id]);
  };
  
  let cartButton;

  if (Auth.loggedIn()) {
    cartButton = <button onClick={handleProductList}>Add to Cart</button>
  } else {
    cartButton = <p>Login to Add to Cart</p>
  }

  return (
    <div className="">
      <div className="productItem">
        <Link to={`/products/${_id}`}>
          <img src={`/images/${image}`} alt={name} />
          <h5>{name}</h5>
          <p>${price}</p>
        </Link>
        {/* {Auth.loggedIn() && <button>Add to Cart</button>} */}
        {cartButton}
      </div>
    </div>
  );
};
export default ProductItem;
