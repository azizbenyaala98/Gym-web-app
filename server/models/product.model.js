import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
  },
  loved: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
