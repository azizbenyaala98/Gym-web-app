import { gql } from 'apollo-server-express';

const typeDefs = gql`
  # User
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

  input UserInputSignup {
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
    password: String
    passwordConfirm: String
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
  # Member
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

  input MemberInput {
    email: String
    fullname: String
    birthday: String
    gender: String
    address: String
    description: String
    phoneNumber: String
  }
  # Course
  type Cours {
    id: ID
    title: String
  }
  input CourseInput {
    title: String
  }
  #Salle
  type Salle {
    id: ID
    title: String
  }

  input SalleInput {
    title: String
  }

  # Product
  type Product {
    id: ID
    title: String
    price: String
    description: String
    picture: String
    loved: Int
  }

  input ProductInput {
    title: String
    price: String
    description: String
    picture: String
    loved: Int
  }

  # Cart
  type Cart {
    id: ID
    title: String
    price: Float
    description: String
    picture: String
    loved: Int
  }

  input CartInput {
    title: String
    price: String
    description: String
    picture: String
    loved: Int
  }

  # Coach
  type Coach {
    id: ID
    fullname: String
    email: String
    address: String
    picture: String
    specialty: String
    available: Boolean
  }

  input CoachInput {
    fullname: String
    email: String
    address: String
    picture: String
    specialty: String
    available: Boolean
  }

  # Common

  type Mutation {
    addCours(document: CourseInput): Cours
    deleteCours(id: ID): String
    updateCours(id: ID, document: CourseInput): Cours
    #Salle
    addSalle(document: SalleInput): Salle
    deleteSalle(id: ID): String
    updateSalle(id: ID, document: SalleInput): Salle
    #User
    login(email: String, password: String): AuthData
    signup(userData: UserInputSignup!): AuthData
    updateUser(id: ID!, document: UserInput): User
    deleteUser(id: ID!): Boolean
    #Member mutations
    addMember(memberData: MemberInput!): MemberResult
    updateMember(id: ID!, document: MemberInput!): MemberResult
    deleteMember(id: ID!): Boolean
    #Product
    addProduct(document: ProductInput): Product
    deleteProduct(id: ID): String
    updateProduct(id: ID, document: ProductInput): Product
    addLoveToProduct(id: ID): Product
    #Cart
    addCart(document: CartInput): Cart
    deleteCart(id: ID): String
    updateCart(id: ID, document: CartInput): Cart
    #Coach
    addCoach(document: CoachInput): Coach
    deleteCoach(id: ID): String
    updateCoach(id: ID, document: CoachInput): Coach
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

    #Product
    getProducts: [Product]
    getProduct(id: ID): Product

    #Cart
    getCarts: [Cart]
    getCart(id: ID): Cart
    #Coach
    getCoachs: [Coach]
    getCoach(id: ID): Coach
  }
`;
export default typeDefs;
