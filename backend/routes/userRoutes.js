const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// Create CRUD requests
// All these paths come after localhost:3000/users/'set path'

// router.get('/', userController.getAllUsers, (req, res) => {
//   console.log(`inside getallusers user rout`)
//   res.status(200).json({ message: `List of all users: ${res.locals.users}` });
// });

router.post('/register', userController.registerUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/login', userController.loginUser, (req, res) => {
  console.log(`inside user/login route`);
  res.status(200).json({ message: `Login User info ${res.locals.user}` });
});



module.exports = router;
