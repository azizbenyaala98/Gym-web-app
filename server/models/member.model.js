import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },

    birthday: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Member', memberSchema);
