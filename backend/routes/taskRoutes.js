const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// create CRUD requests

router.get('/', taskController.getTasks, (req, res) => {
  console.log(`end of getTasks: ${res.locals.tasks}`);
  res.status(200).json(res.locals.task);
});

router.post('/', taskController.createTask, (req, res) => {
  console.log('inside of tasks route')
  res.status(200).json(res.locals.createTask);
});

router.put('/:id', (req, res) => {
  console.log(`end of task update route: ${res.locals.updateTask}`);
  res.status(200).json(res.locals.updateTask);
});

router.delete('/:id', (req, res) => {
  console.log(`end of delete task route: ${res.locals.deleteTask}`);
  res.status(200).json('Task deleted');
});


module.exports = router;