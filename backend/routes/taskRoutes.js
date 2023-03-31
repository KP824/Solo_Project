const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// create CRUD requests

router.get('/', taskController.getTasks, (req, res) => {
  res.status(200).json(res.locals.task);
});

router.post('/', taskController.createTask, (req, res) => {
  res.status(200).json(res.locals.createTask);
});

// router.put('/:id', (req, res) => {
//   res.status(200).json({ message: 'Update Task' });
// });

// router.delete('/:id', (req, res) => {
//   res.status(200).json({ message: 'Delete Task' });
// });


module.exports = router;