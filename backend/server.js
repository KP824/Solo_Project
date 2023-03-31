const path = require('path');
const express = require('express');
const cors = require('cors');
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
app.use(cors());

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  console.log('servehomedist')
  // express.static(path.resolve(__dirname, '../dist'))
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'))
})

app.get('/api/users/login', (req, res) => {
  console.log(`inside api/users/login get request`)
  res.status(200).redirect('/dashboard');
})

/*****DOUBLE CHECK PATHS HERE*/
// First is create users
app.use('/api/users', require('./routes/userRoutes.js'));


//  user tasks path per user
app.use('/api/users/tasks', require('./routes/taskRoutes.js'));

// // Fourth, user gets employee information per location
// app.use('/api/employee', require('./routes/taskRoutes.js'));

// global error handler: - Update this later:
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});


app.listen(PORT, ()=> console.log(`Currently using port: ${PORT}`));