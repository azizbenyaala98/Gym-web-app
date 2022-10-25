import mongoose from 'mongoose';
const { Schema } = mongoose;
const salleSchema =new Schema({
    
    title:{
        type:String,
        required:true
    },
    
})
const Salle=mongoose.model('Salle',salleSchema)
export default Salle;