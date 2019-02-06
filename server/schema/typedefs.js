const {gql}=require("apollo-server-express")
const typeDefs=gql`
              type Book{
                id:ID
                title:String
                genre:String
                authorId:ID
                author:Author
              }
              type Author{
                id:ID
                name:String
                age:Int
                books:[Book]

              }
              type Query{
                book(id:ID):Book
                books:[Book]
                author(id:ID):Author
                authors:[Author]
              },
              type Mutation{
                addAuthor(name:String!,age:Int!):Author
                addBook(title:String!,genre:String!,authorId:String!):Book
              }
              `
module.exports=typeDefs
