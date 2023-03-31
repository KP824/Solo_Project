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
    return next({
      log: 'error inside of taskController.getTasks',
      message: { err: 'failed to get tasks inside of taskController.getTasks'}
    });
  }
};

// START HERE!!!!!!!!!!!!!!!!
taskController.createTask = async (req, res, next) => {
  console.log(`inside of taskController.createTask`)
  const { task } = req.body;

  try {
    const createTask = await User.tasks.insertOne({
      task: task
    });
    res.locals.createTask = createTask;
    return next();
  } 
  catch (err) {
    return next({
      log: 'error inside of taskController.createTask',
      message: { err: 'failed to create task inside of taskController.createTask' }
    })
  }
};


// taskController.updateTask = async (req, res, next) => {

// };


// taskController.deleteTask = async (req, res) => {

// };


module.exports = taskController;