// const { Task } = require('../models');

// exports.createTask = async (req, res) => {
//   try {
//     const task = await Task.create({
//       title: req.body.title,
//       description: req.body.description,
//       userId: req.user.id
//     });
//     res.status(201).json({ message: 'Task created', task });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to create task', error: err.message });
//   }
// };

// exports.getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.findAll({
//       where: { userId: req.user.id },
//       order: [['createdAt', 'DESC']]
//     });
//     res.status(200).json({ tasks });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch tasks', error: err.message });
//   }
// };
// const { Task } = require('../models');

// exports.createTask = async (req, res) => {
//   console.log('🧠 Decoded user:', req.user);
//   const task = await Task.create({
//     title: req.body.title,
//     description: req.body.description,
//     userId: req.user.id
//   });
//   res.status(201).json({ message: 'Task created', task });
// };

// exports.getTasks = async (req, res) => {
//   const tasks = await Task.findAll({ where: { userId: req.user.id } });
//   res.status(200).json({ tasks });
// };
const { Task } = require('../models');

// ✅ Create task
exports.createTask = async (req, res) => {
  console.log('🧠 Decoded user:', req.user);
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
    userId: req.user.id,
  });
  res.status(201).json(task);
};

// ✅ Get tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.user.id } });
  res.status(200).json(tasks);
};

// ✅ Update task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id, userId: req.user.id } });
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  await task.save();

  res.status(200).json(task);
};

// ✅ Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id, userId: req.user.id } });
  if (!task) return res.status(404).json({ message: "Task not found" });

  await task.destroy();
  res.status(200).json({ message: "Task deleted" });
};
