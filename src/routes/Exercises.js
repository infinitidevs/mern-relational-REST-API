const express = require('express');
const {
  getAllExercises,
  getExerciseById,
  getExerciseByIdAndPopulate,
  createExercise,
  updateExercise,
  updateRoutineFromExercise,
  deleteExercise
} = require('../controllers/exercises');

const router = express.Router();

router.get('/', getAllExercises);
router.get('/:id', getExerciseById);
router.get('/:id/routines', getExerciseByIdAndPopulate);
router.post('/', createExercise);
router.put('/:id', updateExercise);
router.put('/:id/update-routine', updateRoutineFromExercise);
router.delete('/:id', deleteExercise);

module.exports = router;
