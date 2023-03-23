
const express = require('express');
const port = 3000 || process.env.PORT;



const app = express();

console.log(`Hello from inside server.js. STARTING MY SOLO PROJECT LFG!!!`);



/* Assuming we'll have multiple use paths: (not organized by priority yet)
  - user info
  - location info
  - tasks
  - employee info
*/

/*****DOUBLE CHECK PATHS HERE. MIGHT HAVE TO UPDATE ONCE USER IS LOGGED IN */
// First is create users
app.use('/api/users', require('./routes/userRoutes.js'));

// Second User chooses location
app.use('/api/users', require('./routes/locationRoutes.js'));

// Third, user gets tasks per location
app.use('/app/users', require('./routes/taskRoutes.js'));

// Fourth, user gets employee information per location
app.use('/api/employee', require('./routes/taskRoutes.js'));

// global error handler: - Update this later:
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});


app.listen(port, ()=> console.log(`Currently using port: ${port}`));