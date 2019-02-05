import mongodb from 'mongodb';
import Todo from '../Schema/model';

const { ObjectID } = mongodb;

class TodosController {
    getAllTodos(req, res) {
        Todo.find()
        .then(todos => res.status(200).send({
            success : 'true',
            message : 'todos retrieved successfully',
            todos,
        }));
    }
    getTodo(req, res) {
        const { id } = req.params;
        if(!ObjectID,isValid(id)) {
            return res.status(400).send({
                success : 'false',
                message : 'ID is not valid',
            });
        }
        Todo.findOne({
            _id : id,
        }).then((todo) => {
            if(todo) {
                return res.status(200).send({
                    success : 'true',
                    message : 'todo retrieved successfully',
                    todo,
                });
            }
            return res.status(400).send({
                success : 'false',
                message : 'todo does not exist',
            });
        }).catch(err => res.status(500).send({
            success : 'false',
            message : 'Internal server error',
            err,
        }));
    }
    createTodo(req,res) {
        if(!req.body.title) {
            return res.status(400).send({
                success : 'false',
                message : 'title is required',
            });
        } else if(!req.body.description)
        {
            return res.status(400).send({
                success : 'false',
                message : 'description is required',
            });
        } else if(!req.body.status)
        {
            return res.status(400).send({
                success : 'false',
                message : 'status is required',
            });
        }

        const newTodo = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
        };
        const todo = new Todo(newTodo);
        todo.save()
            .then(theTodo => res.status(201).send({
                success : 'true',
                message : 'todo added successfully',
            }))
            .catch(() => res.status(500).send({
                success : 'false',
                message : 'Internal server error',
            }));
    }

    updateTodo(req,res) {
        const { id } = req.params;
        if(!ObjectID.isValid(id)) {
            return res.status(400).send({
                success : 'false',
                message : 'ID is not valid',
            });
        }

        if(!req.body.title) {
            return res.status(400).send({
                success : 'false',
                message : 'title is required',
            });
        } else if(!req.body.description)
        {
            return res.status(400).send({
                success : 'false',
                message : 'description is required',
            });
        } else if(!req.body.status)
        {
            return res.status(400).send({
                success : 'false',
                message : 'status is required',
            });
        }

        const newTodo = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
        };

        Todo.findByIdAndUpdate(id, newTodo, { new : true})
            .then((todo) => {
                if(!todo) {
                    return res.status(400).send({
                        success : 'false',
                        message : 'todo not found',
                    });
                }

                return res.status(201).send({
                    success : 'true',
                    message : 'todo updated successfully',
                });
            }).catch(() => res.status(500).send({
                success : 'false',
                message : 'Internal server error',
            }));
    }

    deleteTodo(req, res) {
        const { id } = req.params;
        if(!ObjectID.isValid(id)) {
            return res.status(400).send({
                success : 'false',
                message : 'ID is not valid',
            });
        }

        Todo.findByIdAndRemove(id)
        .then((todo) => {
            if(!todo) {
                return res.status(404).send({
                    success : 'false',
                    message : 'todo not found',
                });
            }
            return res.status(200).send({
                success : 'true',
                message : 'todo deleted successfully',
            });
        });
    }
}

const TodosController = new TodosController();
export default TodosController;