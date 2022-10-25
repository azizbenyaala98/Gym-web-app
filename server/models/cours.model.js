import mongoose from 'mongoose';
const { Schema } = mongoose;
const CoursSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Cours = mongoose.model('Cours', CoursSchema);

export default Cours;
