import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import RecipeResolver from './resolvers/recipe-resolver'

const PORT = process.env.PORT || 4000

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  })

  const server = new ApolloServer({
    schema,
    playground: true,
  })

  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
