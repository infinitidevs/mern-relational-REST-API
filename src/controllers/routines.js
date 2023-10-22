const mongoose = require('mongoose');
const { setError } = require('../config/error');
const { Routine } = require('../models/mongo');

const getAllRoutines = async (req, res, next) => {
  try {
    const routines = await Routine.find({}).lean();
    res.status(200).json({ data: routines });
  } catch (err) {
    return next(setError(404, "Can't find routines"));
  }
};

const getRoutineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const routine = await Routine.findById(id).lean();
    res.status(200).json({ data: routine });
  } catch (err) {
    return next(setError(404, "Can't find routine"));
  }
};

const getRoutineByIdAndPopulate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const routine = await Routine.findById(id)
      .populate({
        path: 'exercises',
        model: 'Exercise',
        select: {
          name: true,
          type: true,
          primary_muscles: true,
          url: true
        }
      })
      .lean();
    res.status(200).json({ data: routine });
  } catch (err) {
    return next(setError(404, "Can't find routine"));
  }
};

const createRoutine = async (req, res, next) => {
  try {
    const newRoutine = new Routine({
      name: req.body.name,
      sets: req.body.sets,
      reps: req.body.reps,
      exercises: req.body.exercises
    });

    await newRoutine.save();
    res.status(201).json({ data: newRoutine });
  } catch (err) {
    return next(setError(404, "Can't create routine"));
  }
};

const updateRoutine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const routine = await Routine.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
        exercises: req.body.exercises
      },
      { new: true }
    );
    res.status(200).json({ data: routine });
  } catch (err) {
    return next(setError(404, "Can't update routine "));
  }
};

const updateExerciseFromRoutine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { exercise } = req.body;
    const exerciseId = mongoose.Types.ObjectId(exercise);

    let routine;

    routine = await Routine.findOneAndUpdate(
      { _id: id, exercises: exerciseId },
      {
        $pull: {
          exercises: exerciseId
        }
      },
      { new: true }
    );

    if (!routine) {
      routine = await Routine.findByIdAndUpdate(
        id,
        {
          $addToSet: {
            exercises: exerciseId
          }
        },
        { new: true }
      );
    }
    res.status(200).json({ data: routine });
  } catch (err) {
    return next(setError(404, "Can't update exercise from routine"));
  }
};

const deleteRoutine = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Routine.findByIdAndDelete(id);
    res.status(200).json({ data: 'OK' }); 
  } catch (err) {
    return next(setError(404, "Can't delete routine"));
  }
};

module.exports = {
  getAllRoutines,
  getRoutineById,
  getRoutineByIdAndPopulate,
  createRoutine,
  updateRoutine,
  updateExerciseFromRoutine,
  deleteRoutine
};
