import React from "react";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  let date1 = order.purchaseDate;
  let date2 = Date(+date1);
  console.log(date2);

  return (
    <div class="historyDiv">
      <h4>
        Purchase ID:<br></br> {order._id}
      </h4>

      <h4>
        Purchase Date:<br></br> {order.purchaseDate}
      </h4>
      {order.products.map((product) => (
        <div>
          <Link to={`/products/${product._id}`}>
            <img src={`/images/${product.image}`} />
          </Link>
          <br></br>
          <p>
            {" "}
            {product.name}
            <br></br>${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Order;
