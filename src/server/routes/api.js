import express from 'express';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();
const Task = require('../models/tasks');

router.route('/tasks')
// post a task
.post((req, res) => {
    const task = new Task({
        title: req.body.formSubject,
        fullname: req.body.formSender,
        email: req.body.formEmail,
        date: req.body.formDate,
        time: req.body.formTime
    });
    
    task.save((err) => {
        if (err) {
            return res.send(err);
        }
        return res.json({ message: 'New task created!'});
    });
})

// get all the tasks
.get((req, res) => {
    Task.find({}).sort({ createdAt: -1 })
    .exec((err, task) => {
        if (err) {
            return res.send(err);
        }
        return res.json(task);
    })
})

// routes starting with /tasks/:id
router.route('/tasks/:id')
// get a specific data
.get((req, res) =>{
    Task.findById(req.params.id, (err, task) => {
        if(err) {
            return res.send(err);
        }
        return res.json(task);
    })
})

// update a specfic data
.put((req, res) => {
    Task.findByIdAndUpdate(req.params.id, {
        title: req.body.formSubject,
        fullname: req.body.formSender,
        email: req.body.formEmail,
        date: req.body.formDate,
        time: req.body.formTime
    }, (err) => {
        if (err) {
            return res.send(err);
        }
        return res.json({message: 'Task updated succesfully'});
    })
})

// delete a data
.delete((req, res) => {
    Task.remove({ _id: req.params.id }, (err) => {
        if (err) {
            return res.send(err);
        }
        return res.json({ message: 'Task has been removed!' });
    });
})

module.exports = router;
