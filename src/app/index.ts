import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from "body-parser";
import { User } from "./user";
import { Log } from './log'
import { Blog } from './blog'

import cors from 'cors'

export async function initServer() {
  const app = express()
  app.use(bodyParser.json())
  app.use(cors())

  const graphqlServer = new ApolloServer({
    typeDefs: `
     ${User.type}
     ${Log.type}
     ${Blog.type}
    type Query{
        hello: String ,
        ${User.query},
        ${Log.query},
        ${Blog.query}
    }
    type Mutation{
      ${Log.mutation}
      ${Blog.mutation}
    }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello, GraphQL!',
        ...User.resolvers.quries,
        ...Log.resolvers.query,
        ...Blog.resolvers.query
      },
      Mutation: {
        ...Log.resolvers.mutation,
        ...Blog.resolvers.mutation
      },
      ...User.resolvers.extraresolver

    }
  });

  await graphqlServer.start()
  app.use('/graphql', expressMiddleware(graphqlServer))
  return app
}