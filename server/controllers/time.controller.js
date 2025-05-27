const { TimeEntry } = require('../models');

exports.startTimer = async (req, res) => {
  const taskId = req.params.taskId;

  const entry = await TimeEntry.create({
    TaskId: taskId,
    startTime: new Date()
  });

  res.status(201).json({ message: 'Timer started', entry });
};

exports.stopTimer = async (req, res) => {
  const taskId = req.params.taskId;

  const entry = await TimeEntry.findOne({
    where: {
      TaskId: taskId,
      endTime: null
    },
    order: [['startTime', 'DESC']]
  });

  if (!entry) {
    return res.status(400).json({ message: 'No active timer found' });
  }

  const endTime = new Date();
  const durationMinutes = Math.floor((endTime - entry.startTime) / 60000); // duration in minutes

  entry.endTime = endTime;
  entry.durationMinutes = durationMinutes;

  await entry.save();

  res.status(200).json({ message: 'Timer stopped', entry });
};


exports.getTimeEntries = async (req, res) => {
  const taskId = req.params.taskId;

  const entries = await TimeEntry.findAll({
    where: { TaskId: taskId },
    order: [['startTime', 'DESC']]
  });

  res.status(200).json({ entries });
};
