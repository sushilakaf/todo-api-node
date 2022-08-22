const mongoose= require('mongoose')
Schema=mongoose.Schema;

const toDoSchema=new mongoose.Schema({
    text:String
})


module.exports=mongoose.model("ToDo",toDoSchema);