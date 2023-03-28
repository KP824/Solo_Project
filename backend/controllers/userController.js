const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const userController = {};

// description: get all Users
// @route GET /api/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));

    res.locals.users = users;
    return next();
  })
};

// description: Create User
// @route POST /user/register
// @access Private
userController.registerUser = async (req, res, next) => {
  console.log(`Hello, inside of userController.createUser`)
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400)
    return next({
      log: 'error happened in userController.createUser',
      message: { err: 'invalid data - missing name, username or password inputs '}
    });
  }

  // check if user exists:
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400)
    throw new Error('User already exists');
  }

  // hash password:
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  try {
    const user = await User.create(newUser);
    res.locals.user = user;
    return next();
  }
  catch(err) {
    return next({
      log: 'error happened in userController.createUser',
      message: { err: 'failed to add entry to the database' }
    });
  }
};

// @desc: POST user data
// @route POST /user/login
// This controller verifies user name and password in the database
userController.loginUser = async(req, res, next) => {
  const { email, password } = req.body;

  // Check for user email:
  const user = await User.findOne({ email });
  
  if (user && (await bcrypt.compare(password, user.password))) {
    res.locals.user = user;
    return next();
  } else {
    return next({
      log: 'Error happened in userController.verifyUser',
      message: { err: 'User does not exist. Please register'}
    });
  };
};



module.exports = userController;