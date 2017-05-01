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


module.exports = router;
