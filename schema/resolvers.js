const _=require("lodash")
const Book=require("../models/book")
const Author=require("../models/author")

var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
  { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
  { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
  { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
];


var authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const resolvers={
  Query:{
          book(parent,args){
            return Book.findById(args.id)
        },
          books(parent){
            return Book.find({})
        },
          author(parent,args){
              return Author.findById(args.id)
        },
          authors(){
            return Author.find({})
        }
        },
  Book:{
          author(parent){
            return _.find(authors,{id:parent.authorId})
      }
  },
  Author:{
            books(parent){
              return _.filter(books,{authorId:parent.id})
         },


  },
  Mutation:{
               addAuthor(parent,args){
                 const author=new Author({
                   name:args.name,
                   age:args.age
                 })
               return author.save()
             },
             addBook(parent,args){
                const book=new Book({
                  title:args.title,
                  genre:args.genre,
                  authorId:args.authorId
                })
                return book.save()
             }
           }
}
module.exports=resolvers
