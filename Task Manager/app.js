require('dotenv').config();
const express = require('express');
const app = express();

// DB + routes
const connectDB = require('./db/connect');
const tasksRouter = require('./routes/tasks');

// middleware
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// built-in middleware
app.use(express.json());

// serve static files (optional, frontend)
// put this BEFORE routes, but AFTER json is also fine
app.use(express.static('./public'));

// root route
app.get('/', (req, res) => {
  res.send('Task Manager API');
});

// tasks routes
app.use('/api/v1/tasks', tasksRouter);

// 404 middleware – MUST be after all routes
app.use(notFound);

// error handler middleware – MUST be last
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB...');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
