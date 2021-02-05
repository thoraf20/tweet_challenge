import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import AuthResolver from './resolvers/AuthResolver'

export const createServer = async () => {
    const server = new ApolloServer({
      schema: await buildSchema({
        resolvers: [AuthResolver],
      }),
      context: ({ req, res }) => {
        return {
          req,
          res,
        }
      },
    })

    server.listen().then(({ port }) => {
        console.log(`Listening on port ${port}`)
      })

      return server
    }
    
    createServer();