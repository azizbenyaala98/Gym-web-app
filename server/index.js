import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./typeDefs/typeDefs.js";
import resolvers from "./resolvers/resolvers.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

async function initServer() {
  const app = express();
  app.use(cors());
  dotenv.config();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("server started successfully");
  });
  const PORT = process.env.PORT || 5000;
  try {
    await mongoose.connect(process.env.mongodb);
    console.log(`connected to mongodb at port ${PORT} `);
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, () =>
    console.log(`Expresss server is running on port ${PORT}`)
  );
}
initServer();
