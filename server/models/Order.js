const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: String,
    default: new Date().toDateString(),
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
