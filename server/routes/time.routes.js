const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { startTimer, stopTimer, getTimeEntries } = require('../controllers/time.controller');

router.post('/start/:taskId', auth, startTimer);
router.post('/stop/:taskId', auth, stopTimer);
router.get('/:taskId', auth, getTimeEntries);

module.exports = router;
