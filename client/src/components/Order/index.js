import React from "react";

const Order = ({ order }) => {
  return (
    <div>
      <h2>Purchase ID: {order._id}</h2>
      <h2>Purchase Date: {order.purchaseDate}</h2>
      {order.products.map((product) => (
        <div class="cartdiv">
          <img src={`/images/${product.image}`} />
          <br></br>
          <p>
            {" "}
            {product.name}
            <br></br>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Order;
