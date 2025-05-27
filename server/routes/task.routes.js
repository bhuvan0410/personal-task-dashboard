// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth.middleware');

// const { validateTask } = require('../middleware/validate.middleware');
// const { createTask, getTasks } = require('../controllers/task.controller');
// router.post('/', auth,validateTask, createTask);
// // router.post('/', auth, createTask);
// router.get('/', auth, getTasks);

// module.exports = router;
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { validateTask } = require("../middleware/validate.middleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

// Routes
router.post("/", auth, validateTask, createTask);   // Create task
router.get("/", auth, getTasks);                    // Get all tasks
router.put("/:id", auth, validateTask, updateTask); // ✅ FIXED: Update task
router.delete("/:id", auth, deleteTask);            // ✅ FIXED: Delete task

module.exports = router;

