# REST API for Workout Routines using MongoDB, Express & NodeJS | <a href="https://mern-rel-model.vercel.app/api" style="color:#2f81f7" target="_blank">Browse API!</a>

## Populate the seed

To populate the exercises seed run the command :

```bash
npm run seed
```

It will create two collections `exercises` and `routines` in your MongoDB.

## Start the server

To start the server run on your terminal:

```bash
npm run start
```

It will automatically connect to the MongoDB host `127.0.0.1` on the port `27017`.

To run the server on watch mode:

```bash
npm run dev
```

## API Exercises Data Structure

The JSON Data that the API for /exercises is gonna return has the following format:

```json
{
  "_id": "serial",
  "name": "Exercise name",
  "type": "Type of exercise: Push, Pull, Legs",
  "primary_muscles": "Main muscles involved",
  "url": "Youtube video of the exercise",
  "routine": "Id of the routine it's used in"
}
```

## API Routines Data Structure

The JSON Data that the API for /routines is gonna return has the following format:

```json
{
  "_id": "serial",
  "name": "Routine name",
  "sets": "No. of sets per exercise",
  "reps": "No. of reps per exercise",
  "exercises": "Array of exercises ids"
}
```

## Documentation for API Endpoints

All URIs are relative to _https://localhost:4001/api_ or _https://mern-rel-model.vercel.app/api_

| HTTP request                                   | Description                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------ |
|                                                |                                                                    |
|**Exercises**                                   |                                                                    |
| **GET** /exercises                             | Get All Exercises                                                  |
| **GET** /exercises/{exerciseId}                | Get Exercise by id                                                 |
| **GET** /exercises/{exerciseId}/routines       | Get Exercise by id and populate it with routines info              |
| **POST** /exercises                            | Create new Exercise using body params                              |
| **PUT** /exercises/{exerciseId}                | Update Exercise using body params                                  |
| **PUT** /exercises/{exerciseId}/update-routine | Update or Delete routine related to one Exercise using body params |
| **DELETE** /exercises/{exerciseId}             | Delete Exercise by id                                              |
|                                                |                                                                    |
|**Routines**                                    |                                                                    |
| **GET** /routines                              | Get All Routines                                                   |
| **GET** /routines/{routineId}                  | Get Routine by id                                                  |
| **GET** /routines/{routineId}/exercises        | Get Routine by id and populate it with exercises info              |
| **POST** /routines                             | Create new Routine using body params                               |
| **PUT** /routines/{routineId}                  | Update Routine using body params                                   |
| **PUT** /routines/{routineId}/update-exercise  | Add or Delete exercise related to a Routine using body params      |
| **DELETE** /routines/{routineId}               | Delete Routine by id                                               |
