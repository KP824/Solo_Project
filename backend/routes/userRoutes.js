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
  console.log(`end of Post request: ${res.locals.user}`);
  // If register is successful, we want to redirect to '/dashboard'
  res.status(200).json(res.locals.user);
});

router.post('/login', userController.loginUser, (req, res) => {
  //console.log(`end of verify/login route. Want to redirect to dashboard. Logging in with this user: ${res.locals.user}`);
  //if successful, res.redirect('/dashboard');
  res.status(200).json(res.locals.user);
});



module.exports = router;
