const express = require('express');
const router = express.Router(); 
const {
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController.js');

// Create CRUD routes 

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Employee' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create Employee' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Update Employee' });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete Employee' });
});

module.exports = router;