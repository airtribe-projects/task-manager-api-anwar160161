const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Set up environment",
    description: "Install Node.js, npm, and git",
    completed: true
  }
];

let currentId = 2;

// GET all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// GET task by ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.status(200).json(task);
});

// CREATE task
app.post('/tasks', (req, res) => {
  const { title, description, completed } = req.body;

  // validation
  if (
    !title ||
    !description ||
    typeof title !== "string" ||
    typeof description !== "string" ||
    (completed !== undefined && typeof completed !== "boolean")
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const newTask = {
    id: currentId++,
    title,
    description,
    completed: completed ?? false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// UPDATE task
app.put('/tasks/:id', (req, res) => {
  const { title, description, completed } = req.body;

  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // validation
  if (
    (title !== undefined && typeof title !== "string") ||
    (description !== undefined && typeof description !== "string") ||
    (completed !== undefined && typeof completed !== "boolean")
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json(task);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);

  // IMPORTANT: return 200 (not 204)
  res.status(200).json({ message: 'Task deleted' });
});

module.exports = app;