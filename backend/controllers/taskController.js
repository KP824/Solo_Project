//const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const taskController = {};


taskController.getTasks = async (req, res, next) => {
  console.log(`inside taskController.getTasks`);
  //const currentUser = await models.User.findOne({_id: _id});

  try {
    const task = await models.User.find({_id: _id});

    res.locals.task = task;
    return next();
  } catch(err) {
    return next(err);
  }
};


// taskController.createTask = async (req, res, next) => {

// };


// taskController.updateTask = async (req, res, next) => {

// };


// taskController.deleteTask = async (req, res) => {

// };


module.exports = taskController;