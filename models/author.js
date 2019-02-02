const mongoose=require("mongoose")

const authorSchema=new mongoose.Schema({
  name:String,
  age:Number,
  id:String
})

const authorModel=new mongoose.model("author",authorSchema)

module.exports=authorModel
