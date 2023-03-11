import mongoose from 'mongoose';

const { Schema } = mongoose;

const CoachSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  specialty: {
    type: String,
  },
  picture: {
    type: String,
    default: 0,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Coach = mongoose.model('Coach', CoachSchema);

export default Coach;
