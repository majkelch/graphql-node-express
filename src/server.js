const express = require('express')
const expressGraphQL = require('express-graphql')

const schema = require('schema')
const resolver = require('resolver')

const app = express()
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'))