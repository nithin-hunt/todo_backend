const router = require('express').Router();
const Todo = require('../model/todoModel');

router.post("/", async(req,res) => { 
    try {
        const {title, description, dueDate, completed, priority} = req.body;

        if(!title) {
            return res.status(400).json("Title is required");
        }

         let todoDetatils = {
            title,
            description,
            dueDate,
            completed,
            priority
         }

         const createdTodo = await Todo.create(todoDetatils);
         return res.status(201).json(createdTodo)
    } catch (e) {
        return res.status(500).json(e);
    }
});







module.exports = router;