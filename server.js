const {ApolloServer,gql}=require("apollo-server-express")
const _=require("lodash")
const app=require("express")()

var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

var authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const typeDefs=gql`
              type Book{
                id:ID
                name:String
                genre:String
                
              }
              type Author{
                id:ID
                name:String
              }
              type Query{
                book(id:ID):Book
                books:[Book]
                author(id:ID):Author
                authors:[Author]
              }
              `

const resolvers={
  Query:{
          book(parent,args){
            return _.find(books,{id:args.id})
          },
          books(parent){
            return books
          },
          author(parent,args){
              return _.find(authors,{id:args.id})
          },
          authors(){
            return authors
          }
        }


}
const server=new ApolloServer({typeDefs,resolvers})

server.applyMiddleware({app})

app.listen({port:4000},()=>{
  console.log(`app is listening at http://localhost:4000${server.graphqlPath}`)
})
