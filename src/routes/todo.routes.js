const {
    createTodo,
    getTodoById,
    getAllToDo,
    updateToDo,
    deleteTodoById
}= require('../controllers/todo.controllers.js');

const router=require('express').Router();

router.post('/',createTodo);
router.get('/:id',getTodoById);
router.get('/',getAllToDo);
router.put('/:id',updateToDo);
router.delete('/:id',deleteTodoById);
module.exports=router;
