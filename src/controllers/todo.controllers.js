const { Template } = require("ejs");
const ToDo = require("../model/toDoSchema.js");

const createTodo = async (req, res) => {
  const { body } = req;
  const toDo = await ToDo.create({ ...body });
  res.status(200).send(toDo);
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  const toDo = await ToDo.findById({ _id: id });
  return res.status(200).send(toDo);
};

const getAllToDo= async(req,res)=>{
    const toDo= await ToDo.find()
    return res.status(200).send(toDo);
    
}

const updateToDo= async(req,res)=>{
    const {id}=req.params;
    const { body}= req;
    const toDo= await ToDo.findOne({_id:id});
    if(!toDo){
        return res.status(404).send({statusCode:404, message:"not found"});
    }
    toDo.set(body);
    await toDo.save();
    res.status(200).send(toDo)
}

const deleteTodoById= async(req,res)=>{
    const {id}=req.params;
    const toDo=await ToDo.findOne({_id:id});
    if(!toDo){
        return res.status(400).send({message:"todo not found"});
    }
    toDo.delete();
    res.status(204).send({message:"sucessfully deleted"})
}



module.exports = {
  createTodo,
  getTodoById,
  getAllToDo,
  updateToDo,
  deleteTodoById
};
