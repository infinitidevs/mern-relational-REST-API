const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({});

const Exercise = mongoose.model('Exercise', emptySchema);
const Routine = mongoose.model('Routine', emptySchema);

module.exports = {
  Exercise,
  Routine,
};
