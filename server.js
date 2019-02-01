const {ApolloServer,gql}=require("apollo-server-express")
const _=require("lodash")
const app=require("express")()
const typeDefs=require("./schema/typedefs.js")
const resolvers=require("./schema/resolvers.js")






const server=new ApolloServer({typeDefs,resolvers})

server.applyMiddleware({app})

app.listen({port:4000},()=>{
  console.log(`app is listening at http://localhost:4000${server.graphqlPath}`)
})
