import express from 'express';
import { createTodo, deleteTodo, getAllTodos, getTodo } from '../controllers/todo.controller.js';
import { verifyTodoInDbMiddleware } from '../middlewares/todo.middleware.js';
export const router = express.Router();

router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.get('/todos/:id', verifyTodoInDbMiddleware, getTodo);
router.put('/todos/:id', verifyTodoInDbMiddleware, getTodo);
router.delete('/todos/:id',verifyTodoInDbMiddleware, deleteTodo);

