const express = require('express');
const exercisesRouter = require('./Exercises');
const routinesRouter = require('./Routines');

const router = express.Router();

router.use('/exercises', exercisesRouter);
router.use('/routines', routinesRouter);

module.exports = router;