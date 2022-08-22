const express= require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const ToDo =require('./src/routes/todo.routes.js') 




mongoose.connect("mongodb://localhost:27017/toDo_db"),{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}

app.use(express.json())
app.use(express.urlencoded({
    extended:true,
})
)

app.use('/Todo',ToDo);

app.listen(3000,()=> console.log("Server Up and runing"));