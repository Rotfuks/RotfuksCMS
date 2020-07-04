import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server';
import db from './db';

import typeDefs from './schema';
import resolvers from './resolver';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});