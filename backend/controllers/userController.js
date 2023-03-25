// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
// const User = require('../models/userModel');

// description: Create User
// @route POST /api/
// @access Private


const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Creating User' });
});


const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' });
});

// const getUser = asyncHandler(async(req, res) => {

// });


module.exports = {
  registerUser,
  loginUser,
  // getUser
};