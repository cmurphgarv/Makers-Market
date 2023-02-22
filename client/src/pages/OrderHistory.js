import React from "react";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Order from "../components/Order";

const OrderHistory = () => {
  const { loading, error, data } = useQuery(QUERY_USER);
  console.log(data);

  let orders = data?.user.orders || [];
  console.log(orders);

  // **NOTE**
  // each user has an array of orders; we map the orders and pass the singular
  // order as a prop to the Order component. The Order component displays information
  // about the Order and maps out each product

  return (
    <div class="historyTitle">
      <h3>Order History</h3>
      {orders.length ? (
        orders.map((order) => <Order order={order} />)
      ) : (
        <p>No Order History!</p>
      )}
    </div>
  );
};

export default OrderHistory;
