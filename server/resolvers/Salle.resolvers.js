import Salle from '../models/salle.js'
const SalleResolvers ={
Query:{
   
    getSalles: async()=>{
        const salles= await Salle.find()
        return salles
    },
    getSalle: async(root,args)=>{
        const salle= await Salle.findById(args.id)
        return salle
    },
},
Mutation:{
    addProduct:async(root,args)=>{
    const newSalle = new Salle({title:args.title})
    await newSalle.save()
    return newSalle
    },
    deleteSalle:async(root,args)=>{
    await Salle.findByIdAndDelete(args.id)
    return "salle deleted successsfully"
    },
    updateProduct:async(root,args)=>{
        const{id,title}=args
        const updatedProduct={};
        if (title!= undefined){
            updatedProduct.title=title
        }
       
        const salle=await Salle.findByIdAndUpdate(id,updatedProduct,{new:true})
        return salle;
    }
}
}
export default SalleResolvers