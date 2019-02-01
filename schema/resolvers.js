const _=require("lodash")
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
        },
  Book:{
          author(parent){
            return _.find(authors,{id:parent.authorId})
      }
  },
  Author:{
    books(parent){
      return _.filter(books,{authorId:parent.id})
    }
  }


}
module.exports=resolvers
