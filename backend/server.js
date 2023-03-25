const path = require('path');
const express = require('express');
// const colors = require('colors');
const connectDB = require('./config/db.js');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

connectDB();

const app = express();

console.log(`Hello from inside server.js.`);

// These two lines allow us to console log our post requests on the req.body object
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', express.static(path.resolve(__dirname, '../dist')));


/*****DOUBLE CHECK PATHS HERE. MIGHT HAVE TO UPDATE ONCE USER IS LOGGED IN */
// First is create users
app.use('/users', require('./routes/userRoutes.js'));

// // Second User chooses location
// app.use('/api/users', require('./routes/locationRoutes.js'));

// // Third, user gets tasks per location
// app.use('/app/users', require('./routes/taskRoutes.js'));

// // Fourth, user gets employee information per location
// app.use('/api/employee', require('./routes/taskRoutes.js'));

// global error handler: - Update this later:
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});


app.listen(PORT, ()=> console.log(`Currently using port: ${PORT}`));