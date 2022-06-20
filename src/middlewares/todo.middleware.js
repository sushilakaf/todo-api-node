import { dataSource } from "../config/typeorm.js";
import { Todo } from "../entity/Todo.js";


export const verifyTodoInDbMiddleware = async (req, res, next) => {
    const todoId = req.params.id;
    const todoRepository = dataSource.getRepository(Todo);
    const todo = await todoRepository.findOne({
        where: {id: todoId},
    });
    if(todo) next();
    else res.status(404).send({statusCode: 404, message: "not found"});
}