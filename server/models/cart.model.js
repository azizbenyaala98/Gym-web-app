import mongoose from 'mongoose';

const { Schema } = mongoose;

const CartSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
