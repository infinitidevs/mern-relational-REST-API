const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema(
  {
    _exerciseid: {
      type: Number,
      required: false
    },
    _routine: {
      type: Number,
      required: false
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    routine: [{ type: mongoose.Types.ObjectId, ref: 'routines' }],
    primary_muscles: [
      {
        type: String,
        required: true
      }
    ],
    url: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    collection: 'exercises'
  }
);

const routineSchema = new mongoose.Schema(
  {
    _routineid: {
      type: Number,
      required: false
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    _exercises: [{ type: Number }],
    exercises: [{ type: mongoose.Types.ObjectId, ref: 'exercises' }],
    sets: {
      type: Number,
      required: true
    },
    reps: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
    collection: 'routines'
  }
);

const Exercise = mongoose.model('exercises', exerciseSchema);
const Routine = mongoose.model('routines', routineSchema);

module.exports = {
  Exercise,
  Routine
};
