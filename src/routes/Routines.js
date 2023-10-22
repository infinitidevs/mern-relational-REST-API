const express = require('express');
const {
  getAllRoutines,
  getRoutineById,
  getRoutineByIdAndPopulate,
  createRoutine,
  updateRoutine,
  updateExerciseFromRoutine,
  deleteRoutine
} = require('../controllers/routines');

const router = express.Router();

router.get('/', getAllRoutines);
router.get('/:id', getRoutineById);
router.get('/:id/exercises', getRoutineByIdAndPopulate);
router.post('/', createRoutine);
router.put('/:id', updateRoutine);
router.put('/:id/update-exercise', updateExerciseFromRoutine);
router.delete('/:id', deleteRoutine);

module.exports = router;
