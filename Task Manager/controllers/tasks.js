// controllers/tasks.js

const Task = require('../models/Task');

// GET /api/v1/tasks
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

// POST /api/v1/tasks
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

// GET /api/v1/tasks/:id
const getTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);

  if (!task) {
    return res.status(404).json({ msg: `No task with id ${taskId}` });
  }

  res.status(200).json({ task });
};

// PATCH /api/v1/tasks/:id
const updateTask = async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No task with id ${taskId}` });
  }

  res.status(200).json({ task });
};

// DELETE /api/v1/tasks/:id
const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findByIdAndDelete(taskId);

  if (!task) {
    return res.status(404).json({ msg: `No task with id ${taskId}` });
  }

  res.status(200).json({ msg: 'Task deleted' });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
