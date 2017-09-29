import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import promise from 'bluebird';

import typeDefs  from './schema';
import resolvers  from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb://Wuriyanto:1003040005Wuriyanto@localhost:27017/node-gql-demo', {useMongoClient: true});
mongoose.Promise = promise;

var Cat = mongoose.model('Cat', { name: String });

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: {Cat} }));

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.listen(PORT);
