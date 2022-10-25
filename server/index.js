import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs/typeDefs.js';
import resolvers from './resolvers/resolvers.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

async function connect() {
  try {
    mongoose.connect(process.env.mongodb);
    mongoose.connection.on('connected', () => {
      console.log('Connection established to the DB');
    });
    mongoose.connection.on('error', () => {
      throw new Error(`unable to connect to database: ${config.db}`);
    });
  } catch (e) {
    console.error(e);
  }
}

async function initServer() {
  const app = express();
  app.use(cors());
  dotenv.config();
  connect();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send('server started successfully');
  });
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}
initServer();
