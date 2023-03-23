const express = require('express');
const router = express.Router();
const { 
  getLocation, 
  createLocation, 
  updateLocation, 
  deleteLocation 
} = require('../controllers/locationController.js');

// create CRUD requests

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Location '});
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create Location' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Update Location '});
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete current location '});
});


module.exports = router;