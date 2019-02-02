const {ApolloServer}=require("apollo-server-express")
const mongoose=require("mongoose")
const app=require("express")()

const typeDefs=require("./schema/typedefs.js")
const resolvers=require("./schema/resolvers.js")

require("dotenv").config()

mongoose.promise=global.promise
mongoose.connect(process.env.mongoURL,{useNewUrlParser:true},()=>{
  console.log("successfully connected to mongodb")
})
const server=new ApolloServer({typeDefs,resolvers})

server.applyMiddleware({app})

app.listen({port:4000},()=>{
  console.log(`app is listening at http://localhost:4000${server.graphqlPath}`)
})
