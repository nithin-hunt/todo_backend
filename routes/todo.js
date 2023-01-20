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

router.get("/", async(req,res) => {
    try {
        const todos = await Todo.findAll();
        return res.status(200).json(todos);
    } catch (e) {
        return res.status(500).json(e);
        
    }
});

router.get("/:id", async(req,res) => {
    try {
        const todo = await Todo.findOne({where: {id: req.params.id}});
        if(!todo) {
            return res.status(404).json("No Todo found")
        }
        return res.status(200).json(todo);
    } catch (e) {
        return res.status(500).json(e);
        
    }
});






module.exports = router;