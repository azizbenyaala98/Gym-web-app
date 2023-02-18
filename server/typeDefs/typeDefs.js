import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Cours {
    id: ID
    title: String
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
    email: String
    firstname: String
    middlename: String
    username: String
    lastname: String
    createdAt: String
    updatedAt: String
    role: String
    picture: String
    country: String
    phoneNumber: String
    birthday: String
    gender: String
    address: String
    description: String
  }
  input MemberInput {
    email: String
    fullname: String
    birthday: String
    gender: String
    address: String
    description: String
    phoneNumber: String
  }

  type MemberResult {
    _id: ID
    id: ID
    email: String
    fullname: String
    birthday: String
    gender: String
    address: String
    description: String
    phoneNumber: String
  }

  type Mutation {
    addCours(title: String): Cours
    deleteCours(id: ID): String
    updateCours(id: ID, title: String): Cours
    addSalle(title: String): Salle
    deleteSalle(id: ID): String
    updateSalle(id: ID, title: String): Salle
    #User
    login(email: String, password: String): AuthData
    signup(userData: UserInput!): AuthData
    updateUser(id: ID!, document: UserInput): User
    deleteUser(id: ID!): Boolean
    #Member mutations
    addMember(memberData: MemberInput!): MemberResult
    updateMember(id: ID!, document: MemberInput!): MemberResult
    deleteMember(id: ID!): Boolean
  }

  type Query {
    welcome: String
    getCours: [Cours]
    getCour(id: ID): Cours
    getSalles: [Salle]
    getSalle(id: ID): Salle
    #User
    users: [User]
    getUser(id: ID!): User
    # Member
    getAllMembers: [MemberResult]
    getMember(id: ID!): MemberResult
  }
`;
export default typeDefs;
