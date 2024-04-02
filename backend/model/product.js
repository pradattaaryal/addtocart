// product.js
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  des: String,
  price: Number,
  image: String,
  category: String
});

const xxx = mongoose.model("ProductData", productSchema);

export default xxx;
/**/