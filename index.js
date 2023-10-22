require('dotenv').config();
require('./src/config/db');
const express = require('express');
const rateLimit = require('express-rate-limit');
const router = require('./src/routes/index');

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 50,
  standardHeaders: false,
  legacyHeaders: false,
});

app.use(limiter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.disable('x-powered-by');

app.use('/api', router, (req, res) => {
  res.status(200).json({
    info: 'Gym workouts API',
    exercises: '/api/exercises',
    routines: '/api/routines'
  });
});

app.use('*', (req, res) => {
  res.status(404).json({ data: 'Not found' });
});

app.use((error, req, res) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`>> Server running on: http://localhost:${PORT}`);
});
