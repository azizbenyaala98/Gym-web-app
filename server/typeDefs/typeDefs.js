import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    welcome: String
    getSalles: [Salle]
    getSalle(id: ID): Salle
  }
  type Salle {
    id: ID
    title: String
  }
  type User {
    _id: ID!
    id: ID
    email: String!
    firstname: String!
    middlename: String
    username: String!
    lastname: String!
    createdAt: String!
    updatedAt: String!
    role: String!
    picture: String
    country: String
    phoneNumber: String
    birthday: String
    gender: String
    address: String
    description: String
  }

  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }

  input UserInput {
    email: String!
    firstname: String!
    lastname: String!
    password: String!
    middlename: String
    passwordConfirm: String!
    country: String
    phoneNumber: String
    birthday: String
    city: String
    username: String
    address: String
    phone: String
    about: String
  }

  type Mutation {
    addSalle(title: String): Salle
    deleteSalle(id: ID): String
    updateSalle(id: ID, title: String): Salle
    login(email: String, password: String): AuthData
    signup(userData: UserInput!): AuthData
  }
`;
export default typeDefs;
