const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// create CRUD requests

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Task' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create Task' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Update Task' });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete Task' });
});


module.exports = router;