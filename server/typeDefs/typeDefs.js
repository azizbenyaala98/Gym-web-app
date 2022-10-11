import { gql } from 'apollo-server-express'


const typeDefs=gql`
type Query{
    welcome:String
    getSalles:[Salle]
    getSalle(id:ID):Salle
}
type Salle{
    id:ID
    title:String  
}

type Mutation{
    addSalle(title:String):Salle
    deleteSalle(id:ID):String
    updateSalle(id:ID,title:String):Salle
}
    `
export default typeDefs