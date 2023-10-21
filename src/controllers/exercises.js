const { setError } = require('../config/error');
const { Exercise } = require('../models/mongo');

const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find({}).lean();
    res.status(200).json({ data: exercises });
  } catch (err) {
    return next(setError(404, "Can't find exercises"));
  }
};

const getExerciseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findById(id).lean();
    res.status(200).json({ data: exercise });
  } catch (err) {
    return next(setError(404, "Can't find exercise"));
  }
};

const getExerciseByIdAndPopulate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findById(id)
      .populate({
        path: 'routine',
        model: 'Routine',
        select: {
          name: true,
          exercises: true,
          sets: true,
          reps: true
        }
      })
      .lean();
    res.status(200).json({ data: exercise });
  } catch (err) {
    return next(setError(404, "Can't find exercise"));
  }
};

const createExercise = async (req, res, next) => {
  try {
    const newExercise = new Exercise({
      name: req.body.name,
      type: req.body.type,
      primary_muscles: req.body.primary_muscles,
      url: req.body.url
    });

    await newExercise.save();
    res.status(201).json({ data: newExercise });
  } catch (err) {
    return next(setError(404, "Can't create exercises"));
  }
};

const updateExercise = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        type: req.body.type,
        primary_muscles: req.body.primary_muscles,
        url: req.body.url
      },
      { new: true }
    );
    res.status(200).json({ data: exercise });
  } catch (err) {
    return next(setError(404, "Can't update exercises"));
  }
};

const updateRoutineFromExercise = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findByIdAndUpdate(
      id,
      {
        routine: req.body.routine
      },
      { new: true }
    );
    res.status(200).json({ data: exercise });
  } catch (err) {
    return next(setError(404, "Can't update routine from exercise"));
  }
};

const deleteExercise = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findByIdAndDelete(id);
    res.status(200).json({ data: exercise });
  } catch (err) {
    return next(setError(404, "Can't delete exercise"));
  }
};

module.exports = {
  getAllExercises,
  getExerciseById,
  getExerciseByIdAndPopulate,
  createExercise,
  updateExercise,
  updateRoutineFromExercise,
  deleteExercise
};
