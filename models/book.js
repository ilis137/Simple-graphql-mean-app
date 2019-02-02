const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
  title:String,
  genre:String,
  id:String,
  authorId:String
})

const bookModel=new mongoose.model("book",bookSchema)

module.exports=bookModel
