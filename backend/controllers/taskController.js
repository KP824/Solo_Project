//const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const taskController = {};

taskController.getTasks = async (req, res, next) => {
  console.log(`inside taskController.getTasks`);
  //const currentUser = await models.User.findOne({_id: _id});

  try {
    const allTasks = await models.User.find({tasks});

    res.locals.tasks = allTasks;
    return next();
  } catch(err) {
    return next({
      log: 'error inside of taskController.getTasks',
      message: { err: 'failed to get tasks inside of taskController.getTasks'}
    });
  }
};

// FIX QUERY!!!!!!!!!!!!!!!!
taskController.createTask = async (req, res, next) => {
  console.log(`inside of taskController.createTask`)
  const { task } = req.body;
  console.log('req.body', task)
  try {
    const createTask = await User.tasks.insertOne({
      $push: { "tasks": task }
    });
    console.log('createTask', createTask)
    res.locals.createTask = createTask;
    return next();
  } 
  catch (err) {
    return next({
      log: `error inside of taskController.createTask, ${err} `,
      message: { err: 'failed to create task inside of taskController.createTask' }
    })
  }
};


taskController.updateTask = async (req, res, next) => {
  try {
    const updateTask = await User.findByIdAndUpdate(req.params.task)
    res.locals.updateTask = updateTask;
    return next();
  }
  catch(err) {
    return next({
      log: `error inside of taskController.updateTask, ${err}`,
      message: { err: 'failed to update task' }
    })
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    const deleteTask = await User.findByIdAndDelete(req.params.id)
    res.locals.deleteTask = deleteTask;
    return next();
  }
  catch (err) {
    return next({
      log: `error inside of taskController.deleteTask, ${err}`,
      message: { err: 'failed to delete task' }
    })
  }
};


module.exports = taskController;