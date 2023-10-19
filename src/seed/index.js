require('dotenv').config();
require('../config/db');
const { Exercise, Routine } = require('../models/mongo');
const seed = require('./seed');

const main = async () => {
  await Exercise.collection.drop();
  await Routine.collection.drop();
  console.log('>> Clean collections');

  console.log('>> Populating seeds in DB');
  const exercises = await Exercise.insertMany(seed.exercises);
  const routines = await Routine.insertMany(seed.routines);
  console.log('>> Correctly populated seeds in DB');

  console.log('>> Updating Exercises with the correct routineid in DB');
  await Promise.all(
    exercises.map(async (exercise) => {
      const dbRoutine = routines.find((routine) => routine._routineid === exercise._routine);
      await exercise.updateOne({ routine: dbRoutine._id });
    })
  );
  console.log('>> Exercises updated');

  console.log('>> Updating Routines with the correct exerciseid in DB');
  await Promise.all(
    routines.map(async (routine) => {
      const dbExercises = routine._exercises.map((exerciseId) => {
        const relatedExercise = exercises.find((exercise) => exercise._exerciseid === exerciseId);
        return relatedExercise._id;
      });

      await routine.updateOne({ exercises: dbExercises });
    })
  );
  console.log('>> Updated Routines in DB');

  await Exercise.updateMany(
    {},
    {
      $unset: {
        _exerciseid: 1,
        _routine: 1
      }
    }
  );

  await Routine.updateMany(
    {},
    {
      $unset: {
        _routineid: 1,
        _exercises: 1
      }
    }
  );
  console.log('>> Deleted private fields');
};

main()
  .then(() => {
    console.log('>> Populated and corrected all seeds in DB');
    process.exit();
  })
  .catch((err) => {
    console.log('>> There was an error populating seeds in DB: ', err);
    process.exit(1);
  });
