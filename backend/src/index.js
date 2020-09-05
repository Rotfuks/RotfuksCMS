import 'dotenv/config';
import {ApolloServer} from 'apollo-server';
import './db';

import typeDefs from './schema';
import resolvers from './resolver';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({req, res, next}) => ({req, res, next}),
});


// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
